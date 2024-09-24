"use client";
import React, { useState } from "react";
import { CardContext } from "./context";
interface Obj {
  id: number;
  name: string;
}
export default function CardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [card, setCard] = useState<Obj[]>([]);
  const add = (obj: Obj) => {
    setCard([...card, obj]);
  };
  const del = (id:number)=>{
    const newCard =card.filter((val)=>val.id !==id)
    setCard([...newCard])
  }
  return (
    <CardContext.Provider value={{ card, add,del }}>
      {children}
    </CardContext.Provider>
  );
}
