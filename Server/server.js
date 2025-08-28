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
const Port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cookieParser());

// DB connect
connecttoDb();

// API routes
app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoute);

// Serve frontend
app.use(express.static(path.join(__dirname, "../Client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/dist/index.html"));
});

server.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
