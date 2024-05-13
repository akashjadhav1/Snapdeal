import React, { useState, useEffect } from "react";
import data from '@/assets/data.json';
import { Card, CardBody, Image, Button } from "@nextui-org/react";

export default function LandingPage() {
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
        <div className="flex">
            <div className="w-1/5 shadow-gray-900 shadow-2xl bg-gray-800 sticky top-0 h-screen overflow-y-auto">
                <div className="p-5">
                    <h1 className="text-white font-bold text-lg">Top Categories</h1>
                </div>
                <nav className="mt-3">
                    <ul>
                        <li className="px-4 py-2 text-white hover:bg-gray-700" onClick={() => filterData("All")}>All</li>
                        {categories.map((category, index) => (
                            <li key={index} className="px-4 py-2 text-white hover:bg-gray-700" onClick={() => filterData(category)}>{category}</li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="w-4/5 gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 m-4">
                {filteredData.map((item, index) => (
                    <Card shadow width="220px" key={index} className="dark m-4">
                        <div className="flex justify-center  items-center h-50 p-3">
                            <Image
                                src={item.image}
                                size="auto"
                                style={{ objectFit: 'fit', maxWidth: '100%', maxHeight: '50%' }}
                            />
                        </div>
                        <CardBody>
                            <div className="text-center font-bold mt-2">
                                <h5 className="truncate">{item.title}</h5>
                                <p>RS. <span>{item.price}</span></p>
                            </div>
                            <div className="mt-4">
                                <Button color="primary" size="full"> ADD TO CART</Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}
