import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./Routes/auth-route.js";
import messageRoute from "./Routes/message-routes.js";
import connecttoDb from "./DB/connecttoDb.js";
import userRoute from "./Routes/user-route.js";
import { app, server } from "./Socket/socket.io.js";

dotenv.config();
const __dirname = path.resolve();
const Port = process.env.PORT || 5000;

// ---------------------- Middlewares ----------------------
app.use(express.json());
app.use(cookieParser());

// ---------------------- DB Connect -----------------------
connecttoDb();

// ---------------------- API Routes -----------------------
app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoute);

// ---------------------- Serve Frontend -------------------
const frontendPath = path.join(__dirname, "Client/dist");
app.use(express.static(frontendPath));

// ✅ Fallback for React Router (only non-API requests)
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    return next(); // API requests → Express handle karega
  }
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ---------------------- Start Server ---------------------
server.listen(Port, () => {
  console.log(`🚀 Server is running on port ${Port}`);
});
