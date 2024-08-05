import express from "express";
import signupRoute from "./routes/signup";
import loginRoute from "./routes/login";
import refreshToken from "./routes/refreshToken";
import logoutRoute from "./routes/logout";
import dotenv from "dotenv";
import connectDB from "./lib/connect";
import cors from "cors";
import cookieParser from "cookie-parser";
import authMiddleware from "./middlewares/authMiddleware";
import http from "http";
import SocketService from "./services/socket";

dotenv.config();

const app = express();
const server = http.createServer(app);
const Socket_Service = new SocketService();
Socket_Service.io.attach(server);
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

connectDB(MONGODB_URI!);
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  res.set("Surrogate-Control", "no-store");
  next();
});
app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/refreshToken", refreshToken);
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route" });
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

Socket_Service.initListeners();
