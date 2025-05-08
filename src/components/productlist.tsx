"use client"
import Stripe from "stripe";
import Product from "./product";
import { useState } from "react";
import { Input } from "./ui/input";

interface Props {
    products: Stripe.Product[]
};

const ProductList = ({products}: Props) => {

    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredProducts = products.filter( (product) => {
         const nameIncludes = (product.name.toLocaleLowerCase()).includes(searchTerm.toLocaleLowerCase()); 
         const descriptionIncludes = (product.description?.toLocaleLowerCase())?.includes(searchTerm.toLocaleLowerCase());

         return nameIncludes || descriptionIncludes;
        });

    return (
        <div className="flex flex-col space-y-5">
            <section>
                <Input type="text"
                       placeholder="Search for products.."
                       value={searchTerm || ""}
                       onChange={(e) => setSearchTerm(e.target.value)}/>
            </section>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto items-stretch gap-3">
            {filteredProducts && 
            filteredProducts.map( (product,key) => {return (
            <li  key={key} className="">
                <Product product={product}/>
            </li>
            )})}    
            </ul>
        </div>
        
    )
}

export default ProductList;