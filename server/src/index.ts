import express from "express";
import signupRoute from "./routes/signup";
import loginRoute from "./routes/login";
import dotenv from "dotenv";
import connectDB from "./lib/connect";
import cors from "cors";
import cookieParser from "cookie-parser";
import logoutRoute from "./routes/logout";
import authMiddleware from "./middlewares/authMiddleware";

dotenv.config();

const app = express();
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
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
