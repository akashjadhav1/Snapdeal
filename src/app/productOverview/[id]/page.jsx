"use client"
import React from "react";
import Image from "next/image";
import bellSvg from "@/assets/bell.svg";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "@/assets/heartIcon";
import addToCart from "@/assets/addToCart.svg";
import { renderStars } from "@/utils/renderStars";
import useProducts from "@/hooks/useProducts";
import { useParams } from "next/navigation";

function ProductOverview() {
  const { id } = useParams();
  const { data } = useProducts();

  // Check if data is undefined or data.pages is undefined
  if (!data?.pages) {
    return <div>Loading...</div>;
  }

  // Flatten the array of products from all pages
  const arrayData = data.pages.flatMap((page) => page.products);

  // Filter the products based on id
  const filteredProduct = arrayData.find((product) => product.id.toString() === id);

  // Check if the filtered product is undefined
  if (!filteredProduct) {
    return <div>Product not found</div>;
  }

  // Render the product details only if the id matches
  return (
    <div className="h-screen mx-auto px-8 py-8 border shadow-xl mt-5 bg-gray-900 text-white">
      <div className="flex">
        <div className="flex items-center justify-center w-[50%] border rounded-xl p-5">
          <Image src={bellSvg} height={500} width={500} alt="image" />
        </div>
        <div className="p-8 w-[50%]">
          <h2 className="text-3xl font-bold">
            {filteredProduct.title}
          </h2>
          <div className="flex items-center  text-[gold] text-lg mt-4">
           Rating  <span className="flex mx-4">{renderStars(Math.round(filteredProduct.rating.rate))}</span>
        </div>

          <div className="mt-2">
            <h1 className="font-bold text-xl">RS.{filteredProduct.price}</h1>
          </div>

          <div className="mt-5 w-3/4">
            <p>
             {filteredProduct.description}
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
