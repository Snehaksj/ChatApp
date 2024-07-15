import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex  justify-between items-center gap-8 max-md:gap-5 mx-auto p-10 w-3/4 h-2 max-md:w-full ">
      <a href="#" className="flex gap-5 justify-center items-center">
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        <h1 className="text-slate-200">ChatApp</h1>
      </a>
      <ul className="flex flex-row justify-between items-center gap-20 text-slate-200 max-md:hidden md:gap-10">
        <a href="#Home">
          <li className=" transition-colors hover:text-violet-600">Home</li>
        </a>
        <a href="#About">
          <li className="transition-colors hover:text-violet-600">About</li>
        </a>
        <a href="#Contact">
          <li className="transition-colors hover:text-violet-600">Contact</li>
        </a>
      </ul>
      <ul className="flex flex-row justify-between items-center gap-10 text-slate-200">
        <a href="#Login">
          <li className="transition-colors hover:text-violet-600">Login</li>
        </a>
        <a href="#SIgnup">
          <li className="transition-colors hover:text-violet-600">SignUp</li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
