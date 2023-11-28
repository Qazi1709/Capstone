import express from "express";
import Razorpay from "razorpay";
import config from "config";

const router = express.Router();

var instance = new Razorpay({
  key_id: config.get('RAZORPAY.API_KEY'),
  key_secret: config.get('RAZORPAY.API_SECRET')
});

router.post("/create-order", async (req, res) => {
  try {
    // Extract parameters from the request body
    const { amount, currency, receipt } = req.body;

    if (!amount || !currency || !receipt) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const options = {
      amount: amount, // amount in the smallest currency unit
      currency: currency,
      receipt: receipt
    };

    instance.orders.create(options, function (err, order) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to create order" });
      }
      res.json(order);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
