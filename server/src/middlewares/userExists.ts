import User from "../model/user";
import { Request, Response, NextFunction } from "express";
const userExists = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ error: { emailMsg: "User already exists" } });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default userExists;
