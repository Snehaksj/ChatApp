import express, { Request, Response } from "express";
import User from "../model/user";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: username }, { username: username }],
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: { usernameMsg: "Invalid username" } });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ error: { passwordMsg: "Invalid password" } });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
