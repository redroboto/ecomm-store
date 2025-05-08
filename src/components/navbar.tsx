"use client"

import Link from "next/link";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useStore } from "@/store/cart-store";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
const Navbar = () => {
    const {items} = useStore();
    const cartCount = items.reduce((acc, item) => acc + item.quantity,0)
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            };

            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return <nav className="sticky top-0 z-50 bg-white shadow">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <Link href="/">My Store</Link>
                    <ul className="hidden md:flex gap-2.5">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul>
                    <div className="flex items-center justify-between gap-4">
                        <Link href="/checkout" className="relative">
                            <ShoppingCartIcon className="h-6 w-6"/>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <Button variant="ghost"
                                className="md:hidden"
                                onClick={() => setMobileOpen((prev) => !prev)}>
                            {mobileOpen? (
                                <XMarkIcon className="h-6 w-6"/>
                            ) : (
                                <Bars3Icon className="h-6 w-6"/>
                            )}
                        </Button>
                    </div>
                </div>
                {mobileOpen && (
                    <nav className="md:hidden bg-white shadow-md">
                        <ul className="flex flex-col p-4 space-y-2">
                            <li>
                            <Link href="/" className="block hover:text-blue-600">
                                Home
                            </Link>
                            </li>
                            <li>
                            <Link href="/products" className="block hover:text-blue-600">
                                Products
                            </Link>
                            </li>
                            <li>
                            <Link href="/checkout" className="block hover:text-blue-600">
                                Checkout
                            </Link>
                            </li>
                        </ul>
                    </nav>
      )}
           </nav>
}

export default Navbar;