import express from "express";
import signupRoute from "./routes/signup";
import loginRoute from "./routes/login";
import dotenv from "dotenv";
import connectDB from "./lib/connect";
import cors from "cors";
import { log } from "console";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

connectDB(MONGODB_URI!);

app.use(cors());
app.use(express.json());
app.use("/signup", signupRoute);
app.use("/login", loginRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
