const Products=require("../models/Products");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const isAuth = require("../middleware/isAuth");

router.post("/wishlist/:productId", isAuth, async (req, res) => {
    const user = await User.findById(req.user._id);
    user.wishlist = user.wishlist.filter(id => id);

    if (!user.wishlist.some(id => id.toString() === req.params.productId))
        user.wishlist.push(req.params.productId);

    await user.save();
    res.redirect(req.get("Referrer") || "/");
});
router.get("/wishlist", isAuth, async (req, res) => {
    const user = await User.findById(req.user._id).populate("wishlist");
    res.render("wishlist", { wishlist: user.wishlist });
});

module.exports = router;
