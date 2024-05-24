'use client'
import { Collection } from 'mongoose'
import React, { useContext, useEffect, useState } from 'react'
import { revalidateTag } from 'next/cache';
import './cart.css'
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/footer';
import Link from 'next/link';
import { CartContext } from '../../../context/CartContext';
import Image from 'next/image';

export default function Page() {

    const { cartItems, handleAddToCart } = useContext(CartContext)
    const [newCart, setNewCart] = useState([])
    let totalPrice = 0

    // const [ignored, forceUpdate] = useReducer(x => x + 1, 0 )

    for (let i = 0; i < cartItems?.length; i++) {
        const cart = cartItems[i]?.price;
        console.log(cart);

    }


    useEffect(() => {
        async function getData() {

            const res = await fetch('api/products');
            if (!res.ok) {
                throw new Error('failed to fetch data')
            }
            setNewCart(await res.json());
        }

        getData();

    }, [])




    // is client to ensure smooth running

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        // forceUpdate()
    }, [handleAddToCart])


    return (
        <>
            {isClient && <div className='cart-parent flex w-full justify-center gap-7 m-10 ml-0 box-border px-10 '>
                <table className='w-3/4 cart-table table1 '>
                    <thead>
                        <tr>
                            <th className='text-left'>Image</th>
                            <th className='cart-title text-left'>Name</th>
                            <th className='text-left'>UP</th>
                            <th className='text-left'>Quantity</th>
                            <th className='text-left'>Total</th>
                            <th className='text-left'>Remove</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems?.length !== 0 ?
                            cartItems?.map((item, index) => {

                                let position = newCart.findIndex((value) => value._id === item.product_id);
                                let info = newCart[position]
                                let Add = item.quantity

                                totalPrice += item.price * item.quantity

                                console.log(totalPrice);
                                return (
                                    <tr key={index}>
                                        <td>
                                            <Image className=' size-24 rounded-full cart-img ' src={info?.img} alt='product' height={400} width={400} />
                                        </td>
                                        <td className='cart-title-name'>{info?.title.slice(0, 15)}</td>
                                        <td>{info?.price}</td>
                                        <td>
                                            <button className='px-3 py-1 bg-lime-600 rounded-full hover:bg-orange-500 ' onClick={() => { handleAddToCart(info, Add); }}>- </button>
                                            {Add}
                                            <button className='px-2.5 py-1 bg-lime-600 rounded-full box-border hover:bg-orange-500 ' onClick={() => { handleAddToCart(info); }}>+</button>
                                        </td>
                                        <td>{info?.price * Add}</td>
                                        <td>
                                            <button onClick={() => handleAddToCart(info, Add, index)} >Remove</button>
                                        </td>
                                    </tr>
                                )
                            }) :
                            <h1 className=' m-auto text-2xl'>Your Cart is empty</h1>
                        }
                    </tbody>
                </table>


                <div className='w-1/5 cart-sum box-border mr-4 '>
                    <table className='w-full h-96 border m-0 box-border p-5 '>
                        <thead>
                            <tr>
                                <th scope='col' colSpan={2}>CART TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>${totalPrice}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Flat Rate</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$70</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${totalPrice + 70}</td>
                            </tr>
                        </tbody>
                        <Link href='/checkout'>
                            <button className=' border mt-4 rounded-lg px-4 py-3  w-full self-center bg-lime-600'>
                                Checkout
                            </button>
                        </Link>
                    </table>
                </div>
            </div>}
        </>
    )
}
