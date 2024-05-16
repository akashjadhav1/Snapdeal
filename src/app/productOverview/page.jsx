import React from "react";
import Image from "next/image";
import bellSvg from "@/assets/bell.svg";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "@/assets/heartIcon";
import addToCart from '@/assets/addToCart.svg';

function ProductOverview() {
  return (
    <div className="h-screen mx-auto px-8 py-8 border shadow-xl mt-5 bg-gray-900 text-white">
      <div className="flex">
        <div className="flex items-center justify-center w-[50%] border rounded-xl p-5">
          <Image src={bellSvg} height={500} width={500} alt="image" />
        </div>
        <div className="p-8 w-[50%]">
          <h2 className="text-3xl font-bold">
            Campus REFRESH PRO Grey Men's Sports Running Shoes
          </h2>
          <div className=" mt-3 p-2">
            <p className=" mx-2">
              Ratings <span>669 reviews</span>
            </p>
          </div>

          <div className="mt-2">
            <h1 className="font-bold text-xl">$ 80.97</h1>
          </div>

          <div className="mt-5 w-3/4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              doloribus repellendus nobis vero minima odit molestiae
              reprehenderit et voluptas eveniet architecto, ea quasi, iusto
              quisquam optio eos eligendi incidunt. Sapiente? Aliquam,
              necessitatibus rem inventore explicabo laudantium incidunt optio
              officia maiores nobis consequatur? Officia, in maxime rerum
              reiciendis quas consequuntur inventore officiis temporibus rem
              corrupti voluptatibus sequi voluptas sint illo et.
            </p>
          </div>
          <div className="flex mt-5 p-1">
            <p className="border-1 border-white w-10 h-10 bg-gray-400 rounded-full mx-1"></p>
            <p className="border-1 border-white w-10 h-10 bg-gray-100 rounded-full mx-1"></p>
            <p className="border-1 border-white w-10 h-10 bg-gray-900 rounded-full mx-1"></p>
          </div>

          

          <div className="mt-5 flex">
            <Button color="secondary" size="lg" fullWidth="true" className="flex">
              <Image src={addToCart} alt="cart" className=""/>
              ADD TO CART
            </Button>
            <Button isIconOnly color="danger" aria-label="Like" className="mx-2 mt-1.5">
                <HeartIcon />
              </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
