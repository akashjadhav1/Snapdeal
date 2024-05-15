import React from "react";
import { Button, Image } from "@nextui-org/react";

function Product({ id, image, title, price }) {
  return (
    <>
<div
      className="dark w-full md:w-[300px] rounded-2xl m-5 h-auto bg-gray-800"
      key={id}
    >
      <div className="flex justify-center items-center rounded-2xl m-5 p-4 h-auto bg-gray-900">
        <div className="">
          <Image src={image} size="auto" alt={title} className="object-cover" />
        </div>
      </div>
      <div className="flex justify-between m-5">
          <h3 className="text-xl font-bold truncate" >{title}</h3>
          <h3 className="text-xl font-bold mx-2">${price}</h3>
        </div>
     <div className="mx-5 pb-5">
        <Button fullWidth="true" size="lg" color="primary">Add to cart</Button>
     </div>
    </div>

    
    </>
    
  );
}

export default Product;
