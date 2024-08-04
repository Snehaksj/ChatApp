"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import withAuth from "../hoc/auth";
import Nav2 from "../components/Nav2";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav2 />
      <div className="flex max-md:flex-col md:flex-row flex-grow bg-black">
        <div className="bg-slate-950 text-white w-full md:w-16 max-md:w-full space-y-4 md:flex-col max-md:flex-row  border-r-[1px] border-zinc-50">
          <nav className="flex md:flex-col space-y-2 max-md:flex-row items-center md:my-6 md:gap-6 max-md:gap-2 max-md:justify-between">
            <a href="/friends" className="hover:bg-gray-700 p-2 rounded">
              <Image
                src="/friends.svg"
                alt="Logo"
                width={25}
                height={25}
              ></Image>
            </a>
            <a
              href="/friend-requests"
              className="hover:bg-gray-700 p-2 rounded"
            >
              <Image
                src="/notifications.svg"
                alt="Logo"
                width={25}
                height={25}
              ></Image>
            </a>
            <a href="/search" className="hover:bg-gray-700 p-2 rounded">
              <Image
                src="/search.svg"
                alt="Logo"
                width={25}
                height={25}
              ></Image>
            </a>
            <a href="/chats" className="hover:bg-gray-700 p-2 rounded">
              <Image src="/chat.svg" alt="Logo" width={25} height={25}></Image>
            </a>
            <a href="/profile" className="hover:bg-gray-700 p-2 rounded">
              <Image
                src="/profile.svg"
                alt="Logo"
                width={25}
                height={25}
              ></Image>
            </a>
          </nav>
        </div>
        <div className="max-md:hidden md:flex bg-slate-950 w-96 "></div>
        <div className="flex-grow p-4 bg-black text-slate-300">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(HomePage);
