import { create } from "zustand";


export const useStorage = create(set=>({
  position:[0,0,0],
  setPosition: (value:number[])=> set((st:Object)=>({...st,position:value.map(el=>Math.round(el))})),
}))