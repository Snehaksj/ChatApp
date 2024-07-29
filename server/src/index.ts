import express from "express";
import signupRoute from "./routes/signup";
import dotenv from "dotenv";
import connectDB from "./lib/connect";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

connectDB(MONGODB_URI!);

app.use(cors());
app.use(express.json()); // Ensure this line is before your routes
app.use("/signup", signupRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
