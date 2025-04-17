import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
    return <nav className="">
                <div className="flex justify-between items-center mx-auto px-4 py-4">
                    <Link href="/">My Store</Link>
                    <ul className="flex gap-2.5">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul>
                    <div>
                        <Link href="#" className=""><ShoppingCartIcon className="h-6 w-6"/></Link>
                    </div>
                </div>
           </nav>
}

export default Navbar;