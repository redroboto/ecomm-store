import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Carousel from "@/components/carousel";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    active: true,
    limit: 5,
  });

  return (
    <div>
      <section className="bg-battleship-gray-100 rounded shadow">
        <div className="mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-evenly">
          <div className="flex flex-col items-center p-5 space-y-2 lg:space-y-4">
            <h1 className="text-[1.4rem] md:text-2xl md:text-center lg:text-3xl font-bold">Welcome to My E-Commerce Store!</h1>
            <p>Check out our selection of products.</p>
            <Button asChild variant="default" className="rounded-full w-1/2">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
          <Image src={products.data[0].images[0]}
                width={500} 
                height={500} 
                alt="Product Image"
                className="overflow-hidden rounded" 
          />
        </div>
        
      </section>
      <section>
        <Carousel products={products.data}/>
      </section>
    </div>
  );
}
