"use client"
import React, { useContext } from "react";
import { CardContext } from "./context";
import { FaTrash } from "react-icons/fa";

export default function Card() {
    const obj = useContext(CardContext);

    return (
        <div className="mx-4 my-4 p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-left text-xl font-semibold text-gray-900 mb-2">Card</h1>
            <ol className="list-decimal list-inside space-y-2">
                {obj.card.map((val:any, i:any) => (
                    <li key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-md hover:bg-gray-400 transition-all duration-200">
                        <div className="flex items-center">
                            <span className="text-gray-600 font-medium">{val.id}</span>
                            <span className="ml-2 text-gray-800 font-bold">{val.name}</span>
                        </div>
                        <span 
                            className="text-red-500 cursor-pointer hover:text-red-600 transition-colors"
                            onClick={() => obj.del(val.id)} 
                        >
                             <FaTrash />
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
