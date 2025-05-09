"use client"

import { Button } from "@/components/ui/button"
import { useStore } from "@/store/cart-store"
import Link from "next/link"
import React, { useEffect } from "react"

const SuccessPage: React.FC = () => {
    const {clearItems} = useStore();
    useEffect(() => {
        clearItems();
    },[clearItems])    
    return (
        <div className="container mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold">Purchase Successful!</h1>
            <p className="text-center">Your products will be prepared and shipped out soon.</p>
            <Link href="/products" className="">
                <Button>
                    Continue Shopping
                </Button>
            </Link>
        </div>
    )
}

export default SuccessPage;