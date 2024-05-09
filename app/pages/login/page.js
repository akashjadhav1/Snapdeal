import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Image from "next/image";
import logo from '../../../public/snapdeal.png'
function login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-200">
      <div className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="flex text-left font-bold">
              <Image
                src={logo}
                className=" rounded-full"
                alt="logo"
                width={29}
                height={26}
              />
              <h2 className="text-[#fc0341] text-xl mx-2">Snapdeal</h2>
            </div>
            <div className="py-10 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-green-500 inline-block mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-12 border-green-500 mb-2"></div>
              <div className="flex justify-center my-2 border shadow-lg rounded p-2 cursor-pointer">
                <button className="mx-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="31"
                    height="31"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </button>
                <p className="font-semibold mt-1">Sign in with google</p>
              </div>
              <div>
                <p className="text-gray-500 my-2">or use your email account</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <FaRegEnvelope className="text-gray-400  mr-2" />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center mt-3">
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400  mr-2" />
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <a
                  href=""
                  className="border-2 mt-5 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>

          <div className="w-2/5 bg-green-500 text-white rounded-r-2xl py-36 px-12">
            <h2 className="text-3xl foont-bold mb-2">Hello,Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">
              {" "}
              Fill up personal information and start journey with us.
            </p>
            <a
              href="/"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
