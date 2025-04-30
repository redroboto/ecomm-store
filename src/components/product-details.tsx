import Stripe from "stripe"
import Image from "next/image";

interface Props{
    product: Stripe.Product;
}
const ProductDetails = ({product} : Props) => {
    return (
        <div className="h-80 w-full relative">
            <Image src={product.images[0]}
                    alt="image"
                    fill
                    className="object-cover transition-opacity duration-500 ease-in-out" />
        </div>
    )
}

export default ProductDetails;