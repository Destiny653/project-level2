'use client'
import React, { createContext, useState } from 'react'

 export const SearchContext = createContext()

export default function SearchProvider({children}) {

    const [store, setStore] = useState([])
    const [store2, setStore2] = useState([])

  return (
     <SearchContext.Provider value={{store, store2, setStore, setStore2}}>
        {children}
     </SearchContext.Provider>
  )
}
