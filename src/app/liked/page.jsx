'use client'
import React, { useContext } from 'react'
import Image from 'next/image';
import './like.css';
import { FaStar } from "react-icons/fa";
import { SearchContext } from '../../../context/SearchContext';



export default function Like() {

    const { love, emptyLike } = useContext(SearchContext)
    console.log(love);

    return (
        <>
            <div className='nunitoextralight_italic like-items'>
                {!love == [] ?
                    love?.map((value, index) => {
                        return (
                            <li key={index} onClick={() => setMainindex(index)} className='like-item flex box-border border p-5 gap-4'>
                                <div className='box-border overflow-hidden'>
                                    <Image className='rounded-xl hover:scale-125 ' alt='image of item' src={value?.img} width={300} height={300} />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text  font-semibold  text-base'>{value?.title}</h1>
                                    <p className='like-pg'>{value?.description}Excepturi obcaecati vitae lorem </p>
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
                    :
                    <h1 className='nunitoextralight_italic like-pg'>You have no liked item</h1>
                }

                <button onClick={() => emptyLike()} className=' bg-orange-400 rounded-xl px-4 py-2 mt-3 active:bg-lime-500 text-white'>Empty list</button>

            </div>
        </>
    )
}
