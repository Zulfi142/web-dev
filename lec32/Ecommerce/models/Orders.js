
const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const orderSchema = new mongoose.Schema({
    orderNumber: { type: String, unique: true, default: () => `ORD-${randomUUID()}` },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true, min: 0 }
    }],
    amount: { type: Number, required: true, min: 0 },
    paymentStatus: { type: String, enum: ["Pending", "Paid", "Failed", "Refunded"], default: "Pending" },
    orderStatus: { type: String, enum: ["Placed", "Processing", "Shipped", "Delivered", "Cancelled"], default: "Placed" }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
