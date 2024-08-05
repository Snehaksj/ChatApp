import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    sameSite: "strict",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logged out successfully" });
});

export default router;
