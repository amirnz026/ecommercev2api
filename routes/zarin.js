const router = require("express").Router();
require("dotenv").config;
const ZarinpalCheckout = require("zarinpal-checkout");
const zarinpal = ZarinpalCheckout.create(process.env.ZARIN_KEY, true);

zarinpal
  .PaymentRequest({
    Amount: "1000", // In Tomans
    CallbackURL: "https://your-safe-api/example/zarinpal/validate",
    Description: "A Payment from Node.JS",
    Email: "hi@siamadssk.work",
    Mobile: "09120000000",
  })
  .then((response) => {
    if (response.status === 100) {
      console.log(response.url);
    }
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = router;
