const Products = require("../models/Products");
const express = require("express");
const router = express.Router();

const User = require("../models/user");

const Order = require("../models/Orders");
const isAuth = require("../middleware/isAuth");

router.post("/orders", isAuth, async (req, res) => {
    const user = await User.findById(req.user._id).populate("cart.productId");
    if (!user || !user.cart.length) return res.redirect("/cart");

    const items = user.cart.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
        price: item.productId.price
    }));

    const amount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    await Order.create({
        user: user._id,
        items,
        amount,
        paymentStatus: "Pending",
        orderStatus: "Placed"
    });

    user.cart = [];
    await user.save();
    res.redirect("/orders");
});

router.get("/orders", isAuth, async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
        .populate("items.productId")
        .sort({ createdAt: -1 });

    res.render("orders", { orders });
});

module.exports = router;
