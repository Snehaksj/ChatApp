import React from "react";
import Nav from "../components/Nav";

const Page = () => {
  return (
    <main className="bg-black h-screen w-full flex flex-col overflow-hidden">
      <Nav />
      <div className="flex h-30 w-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center m-2">
        <div
          className=" bg-black bg-opacity-55 p-10 rounded-xl max-md:px-[70px] flex flex-col gap-5 "
          style={{
            filter: "drop-shadow(0 0 70px rgb(186, 36, 223))",
          }}
        >
          <h3 className="text-3xl text-slate-100 font-medium text-center p-5 max-md:text-2xl max-md:p-2 ">
            Signup
          </h3>
          <form className="flex flex-col gap-4 text-sm max-md:text-xs ">
            <label className="text-slate-100">
              Username
              <input
                type="text"
                className="mt-1 p-2 border border-slate-400 bg-black opacity-55 rounded-md w-full"
              />
            </label>
            <label className="text-slate-100">
              Email
              <input
                type="email"
                className="mt-1 p-2 border border-slate-400 bg-black opacity-55 rounded-md w-full"
              />
            </label>
            <label className="text-slate-100">
              Password
              <input
                type="password"
                className="mt-1 p-2 border border-gray-400 bg-black opacity-55 rounded-md w-full"
              />
            </label>
            <button
              type="submit"
              className="mt-4 mb-2 mx-auto w-1/2 justify-center items-center text-white p-2 rounded-2xl bg-gradientColour hover:bg-hovergradientColour"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;
