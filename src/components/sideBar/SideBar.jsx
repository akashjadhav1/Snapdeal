import React from "react";
import { useState,useEffect } from "react";
import data from '@/assets/data.json';

function SideBar() {

 // Get the first 100 items from the data array
 const topData = data.slice(0, 100);

// State to manage displayed data
const [filteredData, setFilteredData] = useState(topData);
const [categories, setCategories] = useState([]);

// Function to extract unique categories from data
useEffect(() => {
    const uniqueCategories = new Set(topData.map(item => item.category));
    setCategories(Array.from(uniqueCategories));
}, [topData]);

// Function to filter data based on category
const filterData = (category) => {
    if (category === "All") {
        setFilteredData(topData);
    } else {
        const filtered = topData.filter(item => item.category === category);
        setFilteredData(filtered);
    }
};


  return (
    <div className=" shadow-gray-900 shadow-2xl bg-gray-800 sticky top-0 h-screen">
      <div className="p-5">
        <h1 className="text-white font-bold text-lg">Top Categories</h1>
      </div>
      <nav className="mt-3">
        <ul>
          <li
            className="px-4 py-2 text-white hover:bg-gray-700"
            onClick={() => filterData("All")}
          >
            All
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              className="px-4 py-2 text-white hover:bg-gray-700"
              onClick={() => filterData(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
