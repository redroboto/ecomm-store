import ProductList from "@/components/productlist";
import { stripe } from "@/lib/stripe";

const ProductsPage = async () => {
    const products = await stripe.products.list({
        expand: ["data.default_price"],
        active: true,
      });

    return (
        <div>
            <h1>All Products</h1>
            <ProductList products={products.data}/>
        </div>
    )
}

export default ProductsPage;