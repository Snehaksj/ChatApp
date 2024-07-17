import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center gap-8 p-10 mx-auto w-3/4 h-2 max-md:w-full max-md:gap-3 max-md:p-8">
      <Link
        href="/"
        className="flex gap-5 justify-center items-center max-md:gap-2"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="max-md:w-5 max-md:h-5"
        />
        <h1 className="text-slate-200 text-xl max-md:text-sm">ChatApp</h1>
      </Link>
      <ul className="flex flex-row justify-between items-center gap-20 text-slate-200 max-md:hidden md:gap-10">
        <Link href="/">
          <li className="transition-colors hover:text-violet-600 max-md:text-sm">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="transition-colors hover:text-violet-600 max-md:text-sm">
            About
          </li>
        </Link>
        <Link href="/contact">
          <li className="transition-colors hover:text-violet-600 max-md:text-sm">
            Contact
          </li>
        </Link>
      </ul>
      <ul className="flex flex-row justify-between items-center gap-10 text-slate-200 max-md:gap-5">
        <Link href="/login">
          <li className="transition-colors hover:text-violet-600 max-md:text-sm">
            Login
          </li>
        </Link>
        <Link href="/signup">
          <li className="transition-colors hover:text-violet-600 max-md:text-sm">
            SignUp
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
