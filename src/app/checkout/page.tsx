"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/store/cart-store";
import { checkoutAction } from "./check-action";

const CheckoutPage = () => {
    const {items, addItem, deductItem, clearItems} = useStore();
    const totalPrice = (items.reduce((acc,item) => acc + item.quantity*item.price, 0)/100).toFixed(2)
    const totalQuantity = items.reduce((acc,item) => acc + item.quantity,0)

    if (items.length === 0) {
        return (
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center pb-4">Checkout</h1>
                <p className="text-center">There are currently no items in your cart.</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center pb-4">Checkout</h1>
            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>
                        Order Summary
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {items.map((item,key) => {
                            return <li key={key} className="flex flex-col gap-y-4 pb-4 border-b">
                                    <p>{item.name}</p>
                                    <p>${(item.price*item.quantity/100).toFixed(2)}</p>
                                    <div className="flex gap-1 items-center">
                                        <Button onClick={()=> deductItem(item.id)}>-</Button>
                                        <span>{item.quantity}</span>
                                        <Button onClick={() => addItem({...item, quantity: 1})}>+</Button>
                                    </div>
                                </li>
                        })}
                    </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-y-2">
                    <span>Total No. of Items: {totalQuantity}</span>
                    <span>Cart Total: ${totalPrice}</span>
                    <Button onClick={() => clearItems()}>Clear Cart</Button>
                </CardFooter>
            </Card>
            <form action={checkoutAction} className="max-w-md mx-auto">
                <input className="hidden" name="items" value={JSON.stringify(items)} readOnly/>
                <Button type="submit">Proceed to Payment</Button>
            </form>
            
        </div>
    )
}

export default CheckoutPage;