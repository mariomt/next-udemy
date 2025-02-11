import { CartCounter } from "@/app/shopping-cart/components/CartCounter";
import type { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Counter'
}

export default function CouterPage() {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <CartCounter />
        </div>
    )
}