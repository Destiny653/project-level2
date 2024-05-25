'use client'
import React, { useContext, useState } from 'react'
import { SearchContext } from '../../../context/SearchContext'
import { useRouter } from 'next/navigation'
import './searchIn.css'

export default function SearchIn() {

  const navigation = useRouter()
  const { setStore } = useContext(SearchContext)
  const [searchValue, setSeacrchValue] = useState(" ")
  
  if (searchValue !== " "){
    navigation.push('/products')
  }
  setStore(searchValue || ' ')

  return (
    <>
      <label className='search-block' htmlFor="text">
        <input value={searchValue} className='search-input' type="text" name='text' autoComplete='true' onChange={(e) => setSeacrchValue(e.target.value)} />
        <button onClick={()=> searchValue !== " " && navigation.push('/products')} className='search-btn text-white' >Search</button>
      </label>
    </>
  )
}
