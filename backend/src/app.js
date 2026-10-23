import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import inventoryRoutes from "./routes/inventory.routes.js";
import warehouseRoutes from "./routes/warehouse.routes.js";
import rackRoutes from "./routes/rack.routes.js";
import binRoutes from "./routes/bin.routes.js";
import binRecommendationRoutes from "./routes/binRecommendation.routes.js";
import receivingRoutes from "./routes/receiving.routes.js";
import orderRoutes from "./routes/order.routes.js";
import pickingRoutes from "./routes/picking.routes.js";
import dispatchRoutes from "./routes/dispatch.routes.js";
import trackingRoutes from "./routes/tracking.routes.js";
import alertRoutes from "./routes/alert.routes.js";
import activityLogRoutes from "./routes/activityLog.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/warehouses", warehouseRoutes);
app.use("/api/racks", rackRoutes);
app.use("/api/bins", binRoutes);
app.use("/api/bin-recommendation", binRecommendationRoutes);
app.use("/api/receipts", receivingRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/picking", pickingRoutes);
app.use("/api/dispatch", dispatchRoutes);
app.use("/api/tracking", trackingRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/activity-logs", activityLogRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
