"use client"

import Stripe from "stripe"
import Image from "next/image";
import { Button } from "./ui/button";
import { useStore } from "@/store/cart-store";

interface Props{
    product: Stripe.Product;
}
const ProductDetails = ({product} : Props) => {
    const price = product.default_price as Stripe.Price;
    const {items, addItem, deductItem} = useStore();
    const cartItem = items.find((i) => i.id === product.id);
    const quantity = cartItem?.quantity;

    const handleAddItem = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: price.unit_amount as number,
            imageUrl: product.images? product.images[0] : null,
            quantity: 1,
        });
    };

    return (
        <div className="grid grid-cols-2 space-x-2">
            <div className="h-80 w-full relative">
                <Image src={product.images[0]}
                        alt="image"
                        fill
                        className="object-cover transition-opacity duration-500 ease-in-out" />
            </div>
            <div className="flex flex-col space-y-2 px-3">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p>{product.description}</p>
                <span className="font-bold">{price && price.unit_amount && `$ ${(price.unit_amount / 100).toFixed(2)}`}</span>
                <div className="flex space-x-3 items-center">
                    <Button onClick={() => deductItem(product.id)}>-</Button>
                    <span>{quantity ? quantity : 0}</span>
                    <Button onClick={handleAddItem}>+</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;