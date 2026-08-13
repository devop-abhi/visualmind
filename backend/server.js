import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 VisualMind Backend Running",
  });
});
app.get("/api/explain", (req, res) => {
  res.json({
    message: "API is working. Use POST to send a topic."
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});