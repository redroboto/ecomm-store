"use client"
import Stripe from "stripe";
import Product from "./product";
import { useState } from "react";

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
        <div>
            <section>
                <input type="text"
                       placeholder="search products.."
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)} />
            </section>
            <ul className="grid grid-cols-1">
            {filteredProducts && 
            filteredProducts.map( (product,key) => {return (
            <li  key={key}>
                <Product product={product}/>
            </li>
            )})}    
            </ul>
        </div>
        
    )
}

export default ProductList;