import Link from "next/link";
import Image from "next/image";
import Stripe from "stripe";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Props {
    product: Stripe.Product,
}
const Product = ({product}: Props) => {
    const price = product.default_price as Stripe.Price;

    return (
    <Link href={`/products/${product.id}`}>
        <Card className="h-full">
            <div className="h-80 w-full relative">
                <Image src={product.images[0]}
                        alt="image"
                        fill
                        className="object-cover transition-opacity duration-500 ease-in-out" />
            </div>
            <CardHeader>
                <CardTitle>
                    {product.name}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-1/2 justify-between">
                <p className="">
                {product.description}
                </p>
                <div className="flex flex-col space-y-3">
                    <p className="font-bold">
                        {price && price.unit_amount && `$ ${(price.unit_amount / 100).toFixed(2)}`}
                    </p>
                    <Button className="w-1/2">View Details</Button>
                </div>
            </CardContent>
            
        </Card>
        
        
    </Link>
    
)
}

export default Product;