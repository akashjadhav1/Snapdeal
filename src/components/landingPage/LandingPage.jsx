import React, { useState, useEffect } from "react";

import ProductList from "../productList/ProductList"; 
import SideBar from "../sideBar/SideBar";

export default function LandingPage() {
   
    return (
        <div className="flex">
           <div>
            <SideBar/>
           </div>
            
            <div className="flex-1 overflow-y-auto">
                <ProductList/>
            </div>
        </div> 
    );
}
