// config/cashfree.js
const { Cashfree, CFEnvironment } = require("cashfree-pg");

const APP_ID = process.env.APP_ID;
const SECRET_KEY = process.env.SECRET_KEY;

if (!APP_ID || !SECRET_KEY) {
  console.warn("⚠️ Cashfree APP_ID or SECRET_KEY is missing in environment variables!");
}

const cashfree = new Cashfree(CFEnvironment.SANDBOX, APP_ID || "", SECRET_KEY || "");

module.exports = { cashfree };
