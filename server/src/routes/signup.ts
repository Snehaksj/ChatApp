import express, { Request, Response } from "express";
import User from "../model/user";
import userExists from "../middlewares/userExists";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/", userExists, async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  let usernameMsg = "";
  let emailMsg = "";
  let passwordMsg = "";

  if (!username) {
    usernameMsg = "Username required";
  }
  if (username && username.length < 2) {
    usernameMsg = "Username length must be greater than 2";
  }
  if (!email) {
    emailMsg = "Email is required";
  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
    emailMsg = "Invalid Email";
  }
  if (!password) {
    passwordMsg = "Password required";
  } else if (password.length < 8) {
    passwordMsg = "Password must contain more than 8 characters";
  }

  if (usernameMsg || emailMsg || passwordMsg) {
    return res
      .status(400)
      .json({ error: { usernameMsg, emailMsg, passwordMsg } });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "New user created!" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export default router;
