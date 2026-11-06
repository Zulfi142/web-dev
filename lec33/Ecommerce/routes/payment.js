// routes/payment.js
// ─────────────────────────────────────────────────────────────────
// Cashfree Payment Gateway Integration
//
// FLOW:
//  1.  User clicks "Place Order" in cart  → POST /payment/checkout
//  2.  We create a Cashfree order & get a payment_session_id
//  3.  checkout.ejs opens the Cashfree payment UI automatically
//  4.  After payment Cashfree redirects → GET /payment/verify?order_id=...
//  5.  We verify payment status, save the Order in DB, clear the cart
//  6.  Redirect user to /orders
// ─────────────────────────────────────────────────────────────────

const express = require("express");
const router  = express.Router();
const crypto  = require("crypto");

const User    = require("../models/user");
const Order   = require("../models/Orders");
const isAuth  = require("../middleware/isAuth");

// Cashfree client
const { cashfree } = require("../config/cashfree");

// ─── 1. Create Cashfree Order ─────────────────────────────────────
router.post("/payment/checkout", isAuth, async (req, res) => {
    try {
        const userId = req.user._id;

        // Get user's cart with product details
        const user     = await User.findById(userId).populate("cart.productId");
        const userCart = user.cart;

        // Calculate total price
        let totalPrice = 0;
        for (let item of userCart) {
            totalPrice += item.productId.price * item.quantity;
        }

        if (totalPrice <= 0) {
            req.flash("error", "Your cart is empty!");
            return res.redirect("/user/cart");
        }

        // Generate a unique order ID for Cashfree
        const order_id = "order_" + crypto.randomUUID();

        // Dynamic base URL so it works seamlessly on any port (e.g. 3000)
        const baseUrl = `${req.protocol}://${req.get("host")}`;

        // Build the Cashfree order request
        const request = {
            order_amount  : totalPrice,
            order_currency: "INR",
            order_id      : order_id,
            customer_details: {
                customer_id   : String(userId),  // must be a string
                customer_phone: "9999999999"      // placeholder
            },
            order_meta: {
                // Cashfree will redirect here after payment
                return_url: `${baseUrl}/payment/verify?order_id=${order_id}`
            }
        };

        // Call Cashfree API to create the order
        const response = await cashfree.PGCreateOrder(request);

        // Render checkout.ejs which auto-opens the Cashfree payment page
        res.render("payment/checkout", {
            paymentSessionId: response.data.payment_session_id
        });

    } catch (error) {
        console.error("Checkout error:", error.message);
        req.flash("error", "Something went wrong. Please try again.");
        res.redirect("/user/cart");
    }
});

// ─── 2. Verify Payment & Save Order ──────────────────────────────
router.get("/payment/verify", isAuth, async (req, res) => {
    try {
        const { order_id } = req.query;

        // Fetch order status from Cashfree
        const response    = await cashfree.PGFetchOrder(order_id);
        const cashfreeOrder = response.data;

        const userId = req.user._id;
        const user   = await User.findById(userId).populate("cart.productId");

        // Map cart items into the Order schema format
        const items = user.cart.map(item => ({
            productId: item.productId._id,
            quantity : item.quantity,
            price    : item.productId.price
        }));

        const amount = items.reduce(
            (sum, item) => sum + item.price * item.quantity, 0
        );

        if (cashfreeOrder.order_status === "PAID") {
            // ✅ Payment successful

            // Save order to DB with paymentStatus = "Paid"
            await Order.create({
                user         : userId,
                items        : items,
                amount       : amount,
                paymentStatus: "Paid",
                orderStatus  : "Placed"
            });

            // Clear user's cart after successful payment
            user.cart = [];
            await user.save();

            req.flash("success", "Order placed successfully!");
            res.redirect("/orders");

        } else {
            // ❌ Payment failed / cancelled

            // Save order to DB with paymentStatus = "Failed"
            await Order.create({
                user         : userId,
                items        : items,
                amount       : amount,
                paymentStatus: "Failed",
                orderStatus  : "Cancelled"
            });

            req.flash("error", "Payment failed. Please try again.");
            res.redirect("/user/cart");
        }

    } catch (error) {
        console.error("Verify error:", error.message);
        req.flash("error", "Payment verification failed.");
        res.redirect("/user/cart");
    }
});

module.exports = router;

