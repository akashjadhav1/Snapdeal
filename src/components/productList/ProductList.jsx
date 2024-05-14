import React from 'react';
import { Image, Card, CardBody, Button } from '@nextui-org/react';

function ProductList({ id, imageUrl, title, price }) {
  return (
    <div className="dark rounded border">
      <div className="flex justify-center m-8">
        <Image
          src={imageUrl} // Use the passed imageUrl prop here
          size="auto"
          className=''
        />
      </div>
      <div className="text-center font-bold mt-2">
        <h5 className="truncate">{title}</h5> {/* Use the passed title prop here */}
        <p>RS. <span>{price}</span></p> {/* Use the passed price prop here */}
      </div>
      <div className="flex items-center justify-center mt-4 mb-2">
        <Button color="primary" size="lg"> ADD TO CART</Button>
      </div>
    </div>
  );
}

export default ProductList;
