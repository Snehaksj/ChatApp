"use client";
import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    usernameMsg: "",
    passwordMsg: "",
  });
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login/",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log("done!");
      setErrorMessages({ usernameMsg: "", passwordMsg: "" });
      router.push("/home");
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessages(error.response.data.error);
        console.log(error.response.data.error);
      }
    }
  };
  return (
    <main className="bg-black h-screen w-full flex flex-col overflow-hidden">
      <Nav />
      <div className="flex h-30 w-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center">
        <div
          className=" bg-black bg-opacity-55 p-10 rounded-xl max-md:px-[70px] flex flex-col gap-5 "
          style={{
            filter: "drop-shadow(0 0 70px rgb(186, 36, 223))",
          }}
        >
          <h3 className="text-3xl text-slate-100 font-medium text-center p-5 max-md:text-2xl max-md:p-2 ">
            Login
          </h3>
          <form
            className="flex flex-col gap-4 text-sm max-md:text-xs"
            onSubmit={handleLogin}
          >
            <label className="text-slate-100">
              Username/Email
              <input
                type="text"
                className="mt-1 p-2 border border-slate-400 bg-black opacity-55 rounded-md w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            {errorMessages.usernameMsg && (
              <p className="text-red-500">{errorMessages.usernameMsg}</p>
            )}
            <label className="text-slate-100">
              Password
              <input
                type="password"
                className="mt-1 p-2 border border-gray-400 bg-black opacity-55 rounded-md w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {errorMessages.passwordMsg && (
              <p className="text-red-500">{errorMessages.passwordMsg}</p>
            )}
            <button
              type="submit"
              className="mt-4 mb-2 mx-auto w-1/2 justify-center items-center text-white p-2 rounded-2xl bg-gradientColour hover:bg-hovergradientColour"
            >
              Submit
            </button>
          </form>
          <p className="text-slate-300 text-center text-sm">
            Dont have an account?&nbsp;
            <Link href="/signup" className="text-[#ff00cc]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
