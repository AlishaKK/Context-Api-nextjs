"use client";

import React, { useContext } from "react";
import { CardContext } from "./context";

export default function Shop() {
    const obj = useContext(CardContext);
    
    const arr = [
        { name: "Top", id: 1 },
        { name: "Dress", id: 2 },
        { name: "Rings", id: 3 },
    ];

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Shopping</h1>
            <ol className="list-decimal list-inside space-y-3">
                {arr.map((val) => (
                    <li key={val.id} className="flex items-center justify-between p-3 bg-white rounded-md shadow hover:shadow-lg transition-all duration-300">
                        <span className="text-gray-800 font-bold">{val.name}</span>
                        <span 
                            className="text-blue-500 cursor-pointer hover:text-blue-700  font-semibold transition-colors"
                            onClick={() => obj.add({ name: val.name, id: val.id })}
                        >
                            Add to Card
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
