import express, { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";

interface IGetUserAuthInfoRequest extends Request {
  user?: string | JwtPayload; // Make user property optional and flexible
}

const authMiddleware = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!);
    if (typeof verified === "string") {
      req.user = verified;
    } else {
      req.user = verified as JwtPayload;
    }
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

export default authMiddleware;
