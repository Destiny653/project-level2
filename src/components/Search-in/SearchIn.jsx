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
      <label className='search-block relative' htmlFor="text">
      <div className='relative inline'>
      <span onClick={()=> setSeacrchValue(" ")} className='absolute right-1   top-0.5 text-black text-sm rounded-full font-semibold bg-slate-100 px-1.5 py-0 hover:bg-amber-500 cursor-pointer'>x</span>
        <input value={searchValue} className='search-input' type="text" name='text' autoComplete='true' onChange={(e) => {setSeacrchValue(e.target.value); forceUpdate()}} />
      </div>
        <button onClick={()=> {searchValue !== " " && navigation.push('/products');  forceUpdate() }} className='search-btn text-white' >Search</button>
      </label>
    </>
  )
}
