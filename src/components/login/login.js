import react from 'react'
import { Input, Button } from "@nextui-org/react";
import Image from "next/image";
import GoogleLogo from "@/assets/googleLogo.svg";
import {useState} from 'react'

const LoginPage = () => {
const [userData,setUserData] = useState('')

const handleInputChange = (e) =>{
  setUserData(e.target.value)
}



  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(userData)
  };

  return (
    <div className="flex justify-center items-center h-screen text-black">
      <div className="flex">
        hello
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-96"
          >
            <div className="mb-4 px-2">
              <div className="relative">
                <button className="absolute top-0 right-0" type="button">
                  &#10006;
                </button>
                <p className="text-2xl mb-3">Login/SignUp On Snapdeal</p>
              </div>

              <p className="text-[13px] mb-3">
                Please provide your Mobile Number or Email to Login/ Sign Up on
                Snapdeal
              </p>

              <Input
                className="border"
                radius="none"
                id="username"
                type="text"
                placeholder="Mobile Number/Email"
              />
            </div>

            <div className="flex items-center justify-between">
              <Button color="danger" className="w-full font-bold">
                Continue
              </Button>
            </div>
            <div className="mt-12">
              <p className="text-center  text-gray-400">or Login Using</p>
              <div className="flex justify-center cursor-pointer items-center shadow-lg p-1 mt-6 border">
                <Image className="font-light" src={GoogleLogo} alt="google" width={30} height={30} />
                <p className="font-light mx-4">Google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
