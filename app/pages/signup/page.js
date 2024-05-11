import React from 'react'
import Image from 'next/image'
import logo from '../../../public/snapdeal.png'
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import googleSvg from '../../../public/google.svg'


function signup() {
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
                Sign up to Account
              </h2>
              <div className="border-2 w-12 border-green-500 mb-2"></div>
              <div className="flex justify-center my-2 border shadow-lg rounded p-2 cursor-pointer">
              <Image src={googleSvg} alt="Google" className="mx-3" />
                <p className="font-semibold mt-1">Sign up with google</p>
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
                <div className="bg-gray-100 w-64 p-2 flex mt-3 items-center">
                  <MdLockOutline className="text-gray-400  mr-2" />
                  <input
                    type="confirm_password"
                    name=""
                    id=""
                    placeholder="Confirm Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>


                <a
                  href=""
                  className="border-2 mt-5 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>

          <div className="w-2/5 bg-green-500 text-white rounded-r-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello,Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">
              {" "}
              Fill up personal information and start journey with us.
            </p>
            <a
              href="/"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signup
