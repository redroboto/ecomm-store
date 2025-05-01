import ProductDetails from "@/components/product-details";
import { stripe } from "@/lib/stripe";


const ProductPage = async ({params}: {params : Promise<{id : string}>} ) => {
    const {id} = await params;
    const product = await stripe.products.retrieve(id,{
    expand: ["default_price"],
  });

    const plainProduct = JSON.parse(JSON.stringify(product));
    return (
        <div>
            <ProductDetails product={plainProduct}/>
        </div>
    )
}

export default ProductPage;