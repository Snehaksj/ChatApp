import mongoose from "mongoose";

export default function connectDB(MONGODB_URI: string) {
  // console.log(typeof MONGODB_URI);
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Connected to Database successfully!");
    })
    .catch((error) => {
      console.error("Error connecting to Database: ", error.message);
    });
}
