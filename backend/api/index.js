import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";
import { maybeSeed } from "../seed/seed.js";

/**
 * Serverless function entry point for Vercel.
 * Reuses Mongoose connection across invocations.
 */
let isSeeded = false;

export default async function handler(req, res) {
  try {
    await connectDB();
    if (!isSeeded && String(process.env.SEED_ON_START || "true").toLowerCase() === "true") {
      await maybeSeed();
      isSeeded = true;
    }
  } catch (err) {
    console.error("[Vercel Serverless] DB connection error:", err.message);
    return res.status(500).json({
      message: "Database connection failed. Please ensure MONGO_URI is set correctly in environment variables.",
      error: err.message,
    });
  }

  return app(req, res);
}
