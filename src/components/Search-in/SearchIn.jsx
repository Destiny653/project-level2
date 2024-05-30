'use client'
import React, { useContext, useState } from 'react'
import { SearchContext } from '../../../context/SearchContext'
import { useRouter } from 'next/navigation'
import './searchIn.css'
import { CartContext } from '../../../context/CartContext'

export default function SearchIn() {

  const navigation = useRouter()
  const {forceUpdate} = useContext(CartContext)
  const { setStore2 } = useContext(SearchContext)
  const [searchValue, setSeacrchValue] = useState(' ')
  
  // if (searchValue == " "){
  //   navigation.push('/products')
  // }
  setStore2(searchValue)
  console.log(searchValue);

  return (
    <>
      <label className='search-block' htmlFor="text">
        <input value={searchValue} className='search-input' type="text" name='text' autoComplete='true' onChange={(e) => {setSeacrchValue(e.target.value); forceUpdate()}} />
        <button onClick={()=> {searchValue !== " " && navigation.push('/products');  forceUpdate() }} className='search-btn text-white' >Search</button>
      </label>
    </>
  )
}
