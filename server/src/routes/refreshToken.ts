import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
const router = express.Router();
router.post("/", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided" });
  }

  try {
    const verified = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!
    );
    const accessToken = jwt.sign(
      { id: (verified as JwtPayload).id },
      process.env.JWT_SECRET!,
      { expiresIn: "15m" }
    );

    res.cookie("accessToken", accessToken, { httpOnly: true, secure: true });
    res.json({ accessToken });
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired refresh token" });
  }
});

export default router;
