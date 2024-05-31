'use client'
import React, { useContext, useState } from 'react'
import './detail.css'
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import Items from '@/components/Items/page';
import { CartContext } from '../../../context/CartContext';



async function newData(id) {


    const res = await fetch(`api/products/${id}`);
    if (!res.ok) {
        throw new Error('faild to fetch data')
    }

    return res.json()
}



export default async function Page({ params }) {

  const [indexval, setIndexval] = useState([])
  const [selected, setSelected] = useState(false)

    const { handleAddToCart } = useContext(CartContext)

    const { id } = params;
    const data = await newData(id)

    const PopUp = () => {

        if (selected) {
            return (
                <div className={`${selected} pop-parent relative`}>
                    <div onClick={() => setSelected(false)} className='fixed pop-container flex justify-center items-center'>
                        <div className='pop-content relative'>
                            <div onClick={() => setSelected(false)} className={`${selected} nunitoextralight_italicextralight_italic close-pop absolute text-lg font-semibold`}>x</div>
                            <p className=' mb-5 text-center font-semibold text-xs text-green-600 '>Successfully added to cart</p>
                            <div className='flex'>
                                <section className=' pop-sec1 flex justify-center items-center gap-5 box-border overflow-hidden p-1 border-r-2'>
                                    <div className='box-border overflow-hidden rounded-md'>
                                        <Image src={indexval?.img} alt='cart item' height={300} width={300} />
                                    </div>
                                    <div className='flex flex-col justify-center gap-3'>
                                        <h1 className='text-base font-semibold '>{indexval?.title.slice(0, 26)}</h1>
                                        <h2 className='text-base font-semibold text-red-600'>{indexval?.price}</h2>
                                        <span className='flex gap-2'><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></span>
                                    </div>
                                </section>
                                <section className=' pop-sec1 flex flex-col justify-center items-center gap-4'>
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
        <>
            <div className='flex flex-col gap-10 relative'>
                {PopUp()}
                <div className='detail-p flex w-full gap-4  box-border my-8 mt-24 '>
                    <section className='detail1 detail-img-con flex justify-center items-center box-border rounded-2xl overflow-hidden'>
                        <Image className=' w-full' src={data.img} alt='food' width={400} height={400} />
                    </section>
                    <section className='detail2 relative ml-4 flex flex-col gap-6 '>
                        <h1 className='text-3xl font-bold nunitoextralight_italic '>{data.title}</h1>
                        <p className='nunitoextralight_italic text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat modi voluptatibus distinctio voluptatem rerum recusandae porro adipisci sapiente consequatur. Culpa voluptatem modi deleniti ab accusamus eligendi dolorum at enim!
                            Lorem , quos quibusdam quis accusamus sint dolore provident facere dolores quam qui eum consequatur cum laudantium. Corrupti dolore velit omnis.
                        </p>
                        <h1>
                            <FaStar color='gold' className='inline' />
                            <FaStar color='gold' className='inline' />
                            <FaStar color='gold' className='inline' />
                            <FaStar color='gold' className='inline' />
                        </h1>
                        <h1 className='text-4xl font-bold text-orange-400 '>${data.price}</h1>
                        <div className='flex gap-5'>
                            <button className='px-9 py-2 bg-lime-600 text-white text-base nunitoextralight_italic font-semibold rounded-full ' onClick={() => {handleAddToCart(data); setIndexval(data)}}>ADD TO CART</button>
                        </div>
                    </section>
                </div>
                <section className='flex justify-center items-center flex-col gap-4 py-9'>
                    <h1 className='dancing_scriptregular text-3xl font-bold text-lime-500'>Todays Fresh</h1>
                    <h1 className='nunitoextralight_italic text-5xl font-extrabold text-center'>Related Products</h1>
                    <ul className='flex items-center justify-center gap-6 m-10'>
                        <Items />
                    </ul>
                </section>
            </div>
        </>
    )
}
