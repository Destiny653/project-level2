'use client'
import React, {useState, useEffect}  from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'


export default function page() {
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


    async function getData(){
        const result = await fetch('http://localhost:3000/api/products')

        if(!result.ok){
            throw new Error('Faild to fetch data')
        }

        setPosts(await result.json())
    }


    const deletePost = async(id)=>{
        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: 'DELETE'
        })
        if (res.status === 200){
            const result = await res.json()
            console.log(result.body);
            notyf.success('Successfully deleted')
        }else {
            notyf.error('Delete Error')
        }

        setPosts(posts.filter((data, index)=> index !== mainindex))
    }


    useEffect(() => {
        getData()
    },[posts]);



    return (
        <>
            <div className='flex items-start gap-6 mt-5 '>
                <ul className='flex justify-center items-center flex-col w-3/6 gap-4 ml-5'>
                    <div className='flex gap-11'>
                        <h1 className='text-xl m-auto'>All Posts</h1>
                        <button className=' bg-black text-white py-2 px-12 rounded-md'>
                            <Link href='/dashboard/posts/create' >Add</Link>
                        </button>
                    </div>
                    {
                        posts?.map((post, index) => {
                            return (
                                <li key={index} onClick={()=>setMainindex(index)} className='flex box-border border p-5 gap-4'>
                                    <div className=' size-56 box-border overflow-hidden transition-all duration-200 rounded-lg relative'>
                                        <Image className='size-96 rounded-xl hover:scale-125 ' src={post?.img}  width={300} height={300} />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <h1 className='text text-2xl'>{post?.title}</h1>
                                        <p>{post.description}</p>
                                        <div className='flex items-center gap-2'>
                                            <button className=' bg-black text-white p-2  px-3 rounded-full'>{post?.username?.split(' ')[0].slice(0,1) +''+ post?.username?.split(' ')[1].slice(0,1) }</button>
                                            <h1>{post.username}</h1>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='flex itemcenter justify-center flex-col gap-4 w-3/6'>
                    <h1 className='text-xl m-auto'>preview</h1>
                    <div className=' size-96 m-auto  bg-orange-500'>
                        <Image className=' size-96' src={posts && posts[mainindex]?.img} width={300} height={300}/>
                    </div>
                    <h1 className='text-4xl my-2 m-auto'>{posts[mainindex]?.title}</h1>
                    <h1 className=' text-2xl'>{posts[mainindex]?.description}Lorem ipsum dolor sit amet  bore obcaecati!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati vitae quisquam assumenda quis alias asperiores laboriosam ut quia id. Voluptatibus nihil, alias ad maiores unde nostrum dolores in ducimus.</p>
                    <div className='flex gap-6 m-auto'>
                        <button className=' px-10 py-3 bg-black text-white rounded-md'>Edit</button>
                        <button onClick={()=>{deletePost(posts[mainindex]?._id); setMainindex(0)}} className=' px-12 py-3 bg-red-600  text-white rounded-md'>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
