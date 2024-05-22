'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { SiHiveBlockchain } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import Link from 'next/link';
import { CartContext } from '../../../context/CartContext';

export default function Items() {
  const [datatwo, setDatatwo] = useState([])
  const [selected, setSelected] = useState(false)
  const [indexval, setIndexval] = useState(0)
  const {store, handleAddToCart} =useContext(CartContext)

  async function newData() {
    const res = await fetch('http://localhost:3000/api/products');
    if (!res.ok) {
      throw new Error('faild to fetch data')
    }

    setDatatwo(await res.json())

  }

  useEffect(() => {
    newData()
  }, [])

  const PopUp = () => {

    if (selected) {
      return (
        <div className={`${selected} pop-parent relative`}>
          <div onClick={() => setSelected(false)} className='fixed pop-container flex justify-center items-center'>
            <div className='pop-content relative'>
              <div onClick={() => setSelected(false)} className={`${selected} nunitoextralight_italicextralight_italic close-pop absolute text-lg font-semibold`}>x</div>
              <p className=' mb-5 text-center font-semibold text-xs text-green-600 '>Successfully added to cart</p>
              <div className='flex'>
                <section className=' w-3/5 flex justify-center items-center gap-5 box-border overflow-hidden p-2 border-r-2 pl-4'>
                  <div className='box-border overflow-hidden rounded-md'>
                    <Image src={datatwo[indexval]?.img} alt='cart item' height={300} width={300} />
                  </div>
                  <div className='flex flex-col justify-center gap-3'>
                    <h1 className='text-base font-semibold '>{datatwo[indexval]?.title.slice(0, 26)}</h1>
                    <h2 className='text-base font-semibold text-red-600'>{datatwo[indexval]?.price}</h2>
                    <span className='flex gap-2'><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></span>
                  </div>
                </section>
                <section className=' w-2/5 flex flex-col justify-center items-center gap-4'>
                  <Link href='/checkout' className='w-11/12'>
                    <button className=' rounded-md font-semibold text-sm py-2 w-full  bg-lime-600 text-white active:bg-orange-500'>Checkout</button>
                  </Link>
                  <Link className='w-11/12 ' href='/cart'>
                    <button className='  rounded-md text-base w-full  bg-slate-100 py-2 nunitoextralight_italicextralight_italic active:bg-orange-500' >View cart</button>
                  </Link>
                  <button className='  rounded-md text-base w-11/12 nunitoextralight_italicextralight_italic  py-2 bg-slate-100 active:bg-orange-500  ' onClick={() => setSelected(false)}>continue shoping</button>
                </section>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }



  return (
    <div className='flex justify-center items-center gap-3'>
      {PopUp()}
      {
        datatwo?.slice(0, 5).map((item, index) => {
          return (
            <div key={item._id} className='item bg-white card-hover w-100 flex flex-col justify-center items-center box-border p-3 relative overflow-hidden rounded-xl gap-2'>
              <Link href={`/${item._id}`}>
                <Image className=' ' src={item.img} alt='content image' width={500} height={500} />
              </Link>
              <h1 className=' text-xs nunitoextralight_italic font-normal ' style={{ color: 'gray' }}>{item.title.slice(0, 20).toUpperCase()}...</h1>
              <p className=' text-base font-normal'>{item.description}</p>
              <h1>
                <FaStar color='gold' className='inline' />
                <FaStar color='gold' className='inline' />
                <FaStar color='gold' className='inline' />
                <FaStar color='gold' className='inline' />
              </h1>
              <h1 className=' text-orange-500 text-lg font-bold '>${item.price}</h1>
              <button onClick={()=> {handleAddToCart(item); setIndexval(index); setSelected(true)}} className=' btn-bg text-sm  nunitoextralight_italicextralight_italic font-semibold  bg-neutral-100 px-9 py-3 rounded-lg'>ADD TO CART</button>
              <GiSelfLove className='absolute top-4 right-3 trans1 ' size={35} />
              <SiHiveBlockchain className=' absolute top-12 mt-2 right-3 trans2' size={35} />
              <IoSearchOutline className=' absolute top-24   right-3 trans3' size={35} />
            </div>
          )
        })
      }
    </div>
  )
}
