"use client"

import Stripe from "stripe";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";

interface Props {
    products: Stripe.Product[],
}

export default function Carousell({products}: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length)
        },3000)

        return () => clearInterval(interval);
    }, [products]);

    const currentProduct = products[currentIndex];

    const currentPrice = currentProduct.default_price as Stripe.Price;
    const currentName = currentProduct.name;

    return (
        <Card className="relative">
            {currentProduct.images && currentProduct.images[0] && (
                <div className="h-80 w-full relative">
                    <Image src={currentProduct.images[0]}
                            alt="image"
                            fill
                            className="object-cover transition-opacity duration-500 ease-in-out" />
                </div>
            )}
            <CardHeader className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80">
                <CardTitle className="text-white bg-black/80 rounded p-2.5 shadow-sm">
                    {currentName}
                </CardTitle>
                <CardDescription className="text-white bg-black/80 rounded p-2.5 shadow-sm">
                    {currentPrice && currentPrice.unit_amount && `$ ${(currentPrice.unit_amount / 100).toFixed(2)}`}
                </CardDescription>
            </CardHeader>
        </Card>
    )
        
};