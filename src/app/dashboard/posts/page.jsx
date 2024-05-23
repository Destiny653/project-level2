'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import './posts.css';
import { FaStar } from "react-icons/fa";




export default function Page() {
    const [mainindex, setMainindex] = useState(0)
    const [posts, setPosts] = useState([])


    //create an instance of Notyf
    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: 'right',
            y: 'top'
        }
    });


    async function getData() {
        const result = await fetch('http://localhost:3000/api/products')

        if (!result.ok) {
            throw new Error('Faild to fetch data')
        }

        setPosts(await result.json())
    }


    const deletePost = async (id) => {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: 'DELETE'
        })
        if (res.status === 200) {
            const result = await res.json()
            console.log(result.body);
            notyf.success('Successfully deleted')
        } else {
            notyf.error('Delete Error')
        }

        // setPosts(posts.filter((data, index) => index !== mainindex))
    }


    useEffect(() => {
        getData()
    }, [posts]);



    return (
        <>
                <section className='post-sub-container'>
                    <ul className='post-sub-child'>
                        <div className='post-opt flex gap-4'>
                            <h1 className='text-xl text-orange-500'>All Posts</h1>
                            <button className=' bg-black font-semibold text-lime-500  py-2 px-12 rounded-md'>
                                <Link href='/dashboard/posts/create' >Add</Link>
                            </button>
                        </div>

                        <div className='nunitoextralight_italic post-items'>
                            {
                                posts?.map((post, index) => {
                                    return (
                                        <li key={index} onClick={() => setMainindex(index)} className='post-item flex box-border border p-5 gap-4'>
                                            <div className='box-border overflow-hidden'>
                                                <Image className='rounded-xl hover:scale-125 ' src={post?.img} width={300} height={300} />
                                            </div>
                                            <div className='flex flex-col'>
                                                <h1 className='text  font-semibold  text-base'>{post?.title}</h1>
                                                <p className='post-pg'>{post.description}Excepturi obcaecati vitae lorem </p>
                                                <h1>
                                                    <FaStar color='gold' className='inline' />
                                                    <FaStar color='gold' className='inline' />
                                                    <FaStar color='gold' className='inline' />
                                                    <FaStar color='gold' className='inline' />
                                                </h1>
                                                <span className='nunitoextralight_italic font-semibold'>${post.price}</span>
                                                <div className='flex items-center gap-2'>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </ul>

                    <div className='post-detail'>
                        <div className='w-full nunitoextralight_italic flex flex-col gap-2'>
                            <h1 className='text-xl text-orange-500'>Preview</h1>
                            <div className='box-border flex justify-center'>
                                <Image src={posts && posts[mainindex]?.img} width={300} height={300} />
                            </div>
                            <h1 className='post-detail-t text-xl font-semibold'>{posts[mainindex]?.title}</h1>
                            <p className=' post-pg'>{posts[mainindex]?.description}Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className='flex justify-center items-center gap-6'>
                                <button className=' post-btn bg-black text-white rounded-md'>Edit</button>
                                <button onClick={() => { deletePost(posts[mainindex]?._id); setMainindex(0) }} className='post-btn bg-red-600  text-white rounded-md'>Delete</button>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}
