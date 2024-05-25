'use client'
import React, { useContext } from 'react'
import Image from 'next/image';
import './search.css';
import { FaStar } from "react-icons/fa";
import { SearchContext } from '../../../context/SearchContext';



export default function Page() {
 
    const {store} = useContext(SearchContext)

    return (
        <>
            <div className='nunitoextralight_italic search-items'>
                {
                    store?.map((value, index) => {
                        return (
                            <li key={index} onClick={() => setMainindex(index)} className='search-item flex box-border border p-5 gap-4'>
                                <div className='box-border overflow-hidden'>
                                    <Image className='rounded-xl hover:scale-125 ' alt='image of item' src={value?.img} width={300} height={300} />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text  font-semibold  text-base'>{value?.title}</h1>
                                    <p className='search-pg'>{value?.description}Excepturi obcaecati vitae lorem </p>
                                    <h1>
                                        <FaStar color='gold' className='inline' />
                                        <FaStar color='gold' className='inline' />
                                        <FaStar color='gold' className='inline' />
                                        <FaStar color='gold' className='inline' />
                                    </h1>
                                    <span className='nunitoextralight_italic font-semibold'>${value?.price}</span>
                                    <div className='flex items-center gap-2'>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </div>
        </>
    )
}
