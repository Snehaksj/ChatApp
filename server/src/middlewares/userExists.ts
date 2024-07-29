import user from "../model/user";
import User from "../model/user";
import { Request, Response, NextFunction } from "express";
const userExists = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;
  const name = req.body.username;

  try {
    const userEmail = await User.findOne({ email });
    const username = await User.findOne({ username: name });
    if (userEmail) {
      return res
        .status(400)
        .json({ error: { emailMsg: "Email already exists" } });
    }
    if (username) {
      return res
        .status(400)
        .json({ error: { usernameMsg: "Username already exists" } });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default userExists;
