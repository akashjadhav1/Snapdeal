import React from "react";
import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
import {MdLockOutline} from 'react-icons/md'
function login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-200">
      <div className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="flex text-left font-bold">
            <img src="https://upload.wikimedia.org/wikipedia/en/3/35/Snapdeal_Logo_new.png" className="h-7 w-7 rounded-full" alt="logo" />
              <h2 className="text-rose-500 text-xl">Snapdeal</h2>
            </div>
            <div className="py-10 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-green-500 inline-block mb-2">
                Sign in to Account
                
              </h2>
              <div className="border-2 w-12 border-green-500 mb-2"></div>
              <div className="flex justify-center my-2 border border-black rounded p-2 hover:bg-sky-400  cursor-pointer">
                
                  <button className="mx-3">
                    <FaGoogle className="h-7 w-7 "></FaGoogle>
                  </button>
                  <p className="font-semibold">Sign in with google</p>
               
              </div>
              <div>
                <p className="text-gray-500 my-2">or use your email account</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                <FaRegEnvelope className="text-gray-400  mr-2"/>
                <input type="email" name="" id="" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                </div>
              </div>

              <div className="flex flex-col items-center mt-3">
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                <MdLockOutline className="text-gray-400  mr-2"/>
                <input type="password" name="" id="" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                </div>
                <div className="flex justify-between w-64 mb-5 mt-2 text-gray-400">
                <label htmlFor="" className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1"/>Remember me</label>
                <a href="/"  className="text-xs">Forgot Password?</a>
                </div>
                <a href="" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">Sign In</a>
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
