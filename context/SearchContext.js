'use client'
import React, { createContext, useState } from 'react'

 export const SearchContext = createContext()

export default function SearchProvider({children}) {

    const [store, setStore] = useState([])

  return (
     <SearchContext.Provider value={{store, setStore}}>
        {children}
     </SearchContext.Provider>
  )
}
