import mongoose from "mongoose";

/**
 * Connects to MongoDB using the MONGO_URI environment variable.
 * Exits the process if the connection fails, since the whole app
 * depends on the database.
 */
export async function connectDB() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not set. Copy backend/.env.example to backend/.env and fill it in.");
    }
    const conn = await mongoose.connect(uri);
    console.log(`[DB] MongoDB connected -> ${conn.connection.host}/${conn.connection.name}`);
  } catch (err) {
    console.error(`[DB] Connection failed: ${err.message}`);
    process.exit(1);
  }
}
