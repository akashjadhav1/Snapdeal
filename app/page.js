"use client"

import Image from "next/image";
import { useState } from "react";
import logo from '../public/snapdeal.png';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image
                    className="rounded-full"
                    src={logo}
                    alt="logo"
                    width={36}
                    height={36}
                />
                <span className="font-semibold text-2xl tracking-tight mx-2">Snapdeal</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full ${isOpen ? 'block' : 'hidden'}  flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow flex">
                    <input className="p-2 rounded-l lg:w-[500px] w-full lg:mt-0 mt-4 tracking-wider outline-none" type="search" name="search" id="search" placeholder="Search products & brands" />
                    <button className="bg-black lg:p-2 rounded-r text-white w-24 lg:mt-0 h-10 mt-4">Search</button>
                </div>
                <div className="flex lg:mx-4 mt-4 lg:mt-0 cursor-pointer hover:shadow-xl hover:border-b-2 p-1">
                    <p className="text-white lg:mx-2">Cart</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart text-white" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                    </p>
                </div>
                <div className="flex text-white mt-4 lg:mt-0 cursor-pointer hover:shadow-xl p-1 hover:border-b-2">
                    <p className="lg:mx-2">Sign In</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                    </p>
                </div>
            </div>
        </nav>
    );
}
