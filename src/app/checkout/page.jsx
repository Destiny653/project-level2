'use client'
import React, { useContext } from 'react'
import './check.css'
import { ThemeContext } from '../../../context/ThemeContext'
import { CartContext } from '../../../context/CartContext'

export default function Page() {

    const { cartItems } = useContext(CartContext)

    const { mode } = useContext(ThemeContext)
    const Theme = mode == 'light' ? { color: 'black' } : { color: 'black' }
    let totalPrice = 0


    return (
        <>

            {/* checkout your card items */}

            <div className='section-con flex justify-center w-full gap-2 pt-6 box-border px-10'>
                <form className=' form-section w-2/4 box-border p-5 pt-0 flex gap-3 flex-col'>
                    <h1 className='roboto text-2xl  font-medium '>Billing details</h1>
                    <fieldset className='flex input-name gap-4'>
                        <label className='flex flex-col w-full gap-1' htmlFor="name">
                            <span>First name*</span>
                            <input className='px-7 py-2 border' type="text" name='text' style={Theme} />
                        </label>
                        <label className='flex flex-col w-full gap-1' htmlFor="name">
                            <span>Last name*</span>
                            <input className='px-7 py-2 border' type="text" name='text' style={Theme} />
                        </label>
                    </fieldset>
                    <label className='flex flex-col gap-1' htmlFor="name">
                        <span>Company name(optional)</span>
                        <input className='px-7 py-2 border' type="text" name='text' style={Theme} />
                    </label>
                    <label className='flex flex-col gap-1' htmlFor="name">
                        <span>Country/Region*</span>
                        <input className='px-7 py-2 border' type="text" name='text' placeholder='USA' style={Theme} />
                    </label>
                    <label className='flex flex-col gap-1' htmlFor="name">
                        <span>Street address*</span>
                        <input className='px-7 py-2 border' type="text" name='text' placeholder='House number and street name' style={Theme} />
                    </label>
                    <label className='flex flex-col gap-1' htmlFor="name">
                        <span>Town/City*</span>
                        <input className='px-7 py-2 border' type="text" name='text' placeholder='City' style={Theme} />
                    </label>
                    <label className='flex flex-col gap-1' htmlFor="name">
                        <span>State*</span>
                        <input className='px-7 py-2 border' type="text" name='text' placeholder='State' style={Theme} />
                    </label>
                    <label className='flex flex-col gap-1' htmlFor="name">
                        <span>Zip/Postal code*</span>
                        <input className='px-7 py-2 border' type="text" name='text' placeholder='Zip code' style={Theme} />
                    </label>
                    <label className='flex flex-col gap-1' htmlFor="name">
                        <span>Phone number*</span>
                        <input className='px-7 py-2 border' type="text" name='text' placeholder='Phone number' style={Theme} />
                    </label>
                    <label className='flex flex-col gap-1' htmlFor="name">
                        <span>Email address*</span>
                        <input className='px-7 py-2 border' type="text" name='text' placeholder='Email address' style={Theme} />
                    </label>
                    <label className='flex gap-4 ' htmlFor="checkbox">
                        <input type="checkbox" name='checkbox' />
                        <span>Create an account</span>
                    </label>
                    <label className='flex gap-4' htmlFor="checkbox">
                        <input type="checkbox" name='checkbox' />
                        <span className='text-xl font-medium '>Ship to a different address?</span>
                    </label>
                    <label className='flex flex-col gap-2' htmlFor="textarea">
                        <span>Additional information</span>
                        <textarea className='border px-6' name="textarea" id="textarea" cols="4" rows="4" placeholder='Notes about your order, e.g. special notes for delivery'></textarea>
                    </label>
                </form>
                <section className=' table-section w-2/4  box-border p-3 '>
                    <table className='border w-full box-border p-7 mb-3'>
                        <caption className='roboto text-2xl text-left  font-medium mb-3 '>Your order</caption>
                        <thead>
                            <tr>
                            <th className=' border-b text-left pb-4 ' scope='col'>Product name</th>
                                <th className=' border-b text-left pb-4 ' scope='col'>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(item => {

                                    totalPrice += item.price * item.quantity

                                    return (
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>${item.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot className='text font-medium'>
                            <tr>
                                <td>Subtotal</td>
                                <td>${totalPrice}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Flat rate</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$70</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${ totalPrice+ 70}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className='flex flex-col font-medium  gap-4'>
                        <label className='flex gap-3' htmlFor="radio">
                            <input type="radio" name='radio' />
                            <span>Cash on delivery</span>
                        </label>
                        <label className='flex gap-3' htmlFor="radio">
                            <input type="radio" name='radio' />
                            <span>Paypal</span>
                        </label>
                        <label className='flex gap-3' htmlFor="radio">
                            <input type="radio" name='radio' />
                            <span>Credit card</span>
                        </label>
                        <button className=' text-lg font-medium  roboto py-2 rounded-xl bg-lime-500'>Place order</button>
                    </div>
                </section>
            </div>
        </>
    )
}
