'use client'
import React, { createContext, useEffect, useReducer, useState } from 'react'

 export const SearchContext = createContext()

export default function SearchProvider({children}) {

   const [store, setStore] = useState(" ")
   const [store2, setStore2] = useState(" ")
   const [touched, setTouched] = useState(" ")
   const [love, setLove] = useState([])
   const [ignored, forceUpdate] = useReducer(x => x + 1, 0 )

   function handleLiked(liked) {
      forceUpdate()
      let All = love ?? []
      console.log(All);
      All.push(liked);
      localStorage.setItem('love', JSON.stringify(All));
      setLove(All);
  }

  
  useEffect(() => {
   setLove(JSON.parse(localStorage.getItem('love')));
   forceUpdate(love)
}, [])



  return (
     <SearchContext.Provider value={{store, store2, touched,love, handleLiked, setTouched, setStore, setStore2}}>
        {children}
     </SearchContext.Provider>
  )
}
