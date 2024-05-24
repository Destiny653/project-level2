'use client'
import React, { useContext } from 'react'
import './detail.css'
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import Items from '@/components/Items/page';



async function newData(id) {

    
    const res = await fetch(`api/products/${id}`);
    if (!res.ok) {
        throw new Error('faild to fetch data')
    }
    
    return res.json()
}



export default async function page({ params }) {
    
    const { id } = params;
    const data = await newData(id)
 

    return (
        <>
            <div className='flex flex-col gap-10'>
                <div className='flex w-full gap-4  box-border px-8 my-8 mt-24 '>
                    <section className=' detail-img-con flex justify-center items-center w-5/12  box-border rounded-2xl overflow-hidden'>
                        <Image className=' w-full' src={data.img} alt='food' width={400} height={400} />
                    </section>
                    <section className=' relative top-14 w-7/12 ml-4 flex flex-col gap-6 '>
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
                            <button  className='px-9 py-2 bg-lime-600 text-white text-base nunitoextralight_italic font-semibold rounded-full '>ADD TO CART</button>
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
