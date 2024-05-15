import { Button } from "@nextui-org/react";
import bellSvg from "@/assets/bell.svg";
import Image from "next/image";
import leftArrow from "@/assets/leftArrow.svg";
import { Badge, Input } from "@nextui-org/react";
import AddToCart from "@/assets/addToCart.svg";
import { useState } from "react";

const Cart = () => {
  const [isInvisible, setIsInvisible] = useState(false);

  return (
    <div className="dark container mx-auto px-8 py-8 border shadow-xl mt-5">
      <div className="flex justify-between">
        <p>Snapdeal</p>
        <div className="flex justify-between ">
          <h3 className="m-5 text-lg">
            $49.99 <span className="text-gray-400">(1 Item)</span>
          </h3>
          <Badge
            color="default"
            className="mt-2 cursor-pointer"
            content={50}
            isInvisible={isInvisible}
            shape="circle"
          >
            <Image
              src={AddToCart}
              className="cursor-pointer"
              alt="cart"
              width={35}
              height={35}
            />
          </Badge>
        </div>
      </div>
      <div className="mb-5">
        <Button radius="md" color="secondary">
          <Image src={leftArrow} alt="leftArrow" />
          Go back
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
      <hr className="mt-10" />

      


    <div className="mt-5">
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>$159.96</p>
      </div>
      <div className="flex justify-between mt-2">
      <p>Delivery</p>
        <p>$0.00</p>
      </div>
      <div className="flex justify-between mt-2">
      <p>Tax</p>
        <p>$23.99</p>
      </div>
      <div className="flex justify-between mt-2">
      <p>Discount</p>
        <p>-$10.99</p>
      </div>
      <hr className="mb-2 mt-2"/>
      <div className="flex justify-between mt-2">
      <p>Total</p>
        <p>$172.96</p>
      </div>
    </div>


    <div className="mt-6 flex justify-end">
    <Button color="primary" size="lg" variant="bordered">
        Continue to Shipping
      </Button>  
    </div>

    </div>
  );
};

export default Cart;
