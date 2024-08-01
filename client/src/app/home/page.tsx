"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import withAuth from "../hoc/auth";
import React from "react";

function page() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/logout/",
        {},
        { withCredentials: true }
      );
      console.log("Logged out successfully!");
      router.replace("/"); // Redirect to the base URL
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <button
      className="bg-gradientColour hover:bg-hovergradientColour"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default withAuth(page);
