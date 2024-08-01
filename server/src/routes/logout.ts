import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logged out successfully" });
});

export default router;
