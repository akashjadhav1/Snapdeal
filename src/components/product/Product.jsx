import React from 'react'

import { Card,CardBody,Button,Image } from '@nextui-org/react'

function Product({id,imageUrl,title,price}) {
  return (
    <div className=" gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 m-4">
               
               <div className="dark w-[300px] rounded m-5 h-auto border">
                
                    
                <div className="flex justify-center m-8">
                    <Image
                        src="https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg"
                        size="auto"
                       className=''
                    />
                </div>

                    <div className="text-center font-bold mt-2">
                        <h5 className="truncate">{title}</h5>
                        <p>RS. <span>{price}</span></p>
                    </div>
                    <div className="flex items-center justify-center mt-4 mb-2">
                        <Button color="primary" size="lg"> ADD TO CART</Button>
                    </div>
     
    </div>
                
            </div>
  )
}

export default Product
