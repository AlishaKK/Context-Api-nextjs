"use client"
import { createContext } from "react"
interface Card{
    [x:string]:any
}
export const CardContext =createContext({} as Card);