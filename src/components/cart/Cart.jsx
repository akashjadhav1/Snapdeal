import { Button } from "@nextui-org/react";
import Image from "next/image";
import bellSvg from "@/assets/bell.svg";
import leftArrow from "@/assets/leftArrow.svg"




const Cart = () => {
  return (
    
    <div className="container mx-auto px-8 py-8 border shadow-xl mt-5">
    <div className="mb-5">
    <Button radius="md" color="secondary">
        <Image src={leftArrow} alt="leftArrow"/>Go back
      </Button>  
    </div>

      <div className="">
        <h1 className="text-3xl">Review your order</h1>
      </div>

      <div className="flex justify-between items-center mt-10">
        <div className="flex">
          <Image src={bellSvg} alt="bellsvg" width={80} height={80} />

          <div className="mx-10 p-2 text-lg">
            <p className="">Training shoes</p>
            <div className="flex">
              <p className="text-gray-400">
                Color: <span className="text-white">Black</span>
              </p>
              <p className="text-gray-400 mx-3">
                Size: <span className="text-white">42</span>
              </p>
            </div>
            <p>
              $49.99 <span className="text-gray-400">X 1</span>
            </p>
          </div>
        </div>
        <div className="flex bg-gray-800 rounded-full">
          <p className="flex items-center justify-center w-10 h-10">&#10006;</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
