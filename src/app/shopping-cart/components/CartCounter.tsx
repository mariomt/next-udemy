'use client'

import { useState } from "react";

export const CartCounter = () => {
    const [ count, setCount ] = useState(1);
    return (
        <>
            <span className="text-9xl"> {count} </span>

            <div className="flex">
                <button
                    className="flex items-center justify-center p-4 rounded-xl bg-gray-900 text-white hover:bg-gray-600 mr-2"
                    onClick={() => {
                        setCount((prev: number) => (prev-1))
                    }}
                >
                    -1
                </button>
                <button
                    className="flex items-center justify-center p-4 rounded-xl bg-gray-900 text-white hover:bg-gray-600"
                    onClick={() => {
                        setCount((prev: number) => (prev+1))
                    }}
                >
                    +1
                </button>
            </div>
        </>
    )
}