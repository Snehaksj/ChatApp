import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Nav = () => {
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
    <nav className="backgroundGradient flex justify-between items-center gap-8 p-2 md:px-20 max-md:px-6">
      <Link
        href="/"
        className="flex gap-5 justify-center items-center max-md:gap-2"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={20}
          height={20}
          className="max-md:w-5 max-md:h-5"
        />
        <h1 className="text-slate-200 md:text-lg max-md:text-sm">ChatApp</h1>
      </Link>

      <ul className="flex flex-row justify-between items-center gap-10 text-slate-200 max-md:gap-5">
        <button
          className="bg-gradientColour hover:bg-hovergradientColour text-white px-4 py-2 rounded-xl max-md:text-xs"
          onClick={handleLogout}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
