import React, { useState, useEffect } from 'react';
import data from '@/assets/data.json';
import Product from '../product/Product';

function ProductList() {
  // Get the first 50 items from the data array
  const topData = data.slice(0, 50);

  return (
    <div className="dark flex justify-center">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
        {topData.map((item, index) => (
          <Product
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            className="w-full h-full"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
