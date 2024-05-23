'use client'
import React, { useContext, useEffect, useState } from 'react'
import './nav.css';
import { CiFacebook } from 'react-icons/ci';
import { TfiYoutube } from 'react-icons/tfi';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { GrLanguage } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import DarkMode from '../DarkModeToggle/DarkMode';
import Image from 'next/image';
import { CartContext } from '../../../context/CartContext';
import { ThemeContext } from '../../../context/ThemeContext';
import Toggle from '../Toggle/page';
import Link from 'next/link';

export default function NavBar() {

    const { cartItems } = useContext(CartContext)
    const { mode, change, setChange } = useContext(ThemeContext)
 


    const links = [
        { name: 'Home', href: '/' },
        { name: 'Checkout', href: '/checkout' },
        { name: 'Dashboard', href: '/dashboard/posts' },
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
        { name: 'Cart', href: '/cart' },
    ]


    return (
        <div className='nunitoextralight_italic nav-bg'>

            <div className=" justify-center py-3 head-text ">
                <p className=" text-xs text-center">GET 20% FOR ALL ORDERS IN THIS WEEK!</p>
            </div>
            <div className="input-parent flex justify-between my-3 mx-10 mt-5">
                <Image className='logo-img'
                    src="/img/icon-3.png"
                    alt="logo"
                    width={160}
                    height={40}
                />
                <div className="text scale search-section">
                    <select style={mode == 'black' ? { color: 'black' } : { color: 'black' }} name="category" id="" className="home-input-btn-l text text-xs w-3/12 pl-1 h-12 align-top">
                        <option >All Category</option>
                    </select>
                    <input type="text" placeholder="Search Item..." className=" border border-lime-400 text w-2/4 h-12 px-3 py-5 " />
                    <input type="button" value="Search" className="home-input-btn-r text align-top h-12 w-3/12 " />
                </div>
                <ul key={10} className="icon-nav flex gap-2">
                    <li className=" home-icon bg-gray-300 rounded-xl h-8 p-2 pb-10  text-3xl scale-90 relative"><Link href='/cart'><IoCartOutline /></Link><span className='absolute size-7 cart-length  rounded-full p-1 top-0 left-0 bg-red-600 text-white  '>{cartItems ? cartItems?.length : 0}</span></li>
                    <li className=" home-icon bg-gray-300 rounded-xl h-8 p-2 pb-10  text-3xl scale-90"><FaRegCircleUser /></li>
                    <li className=" home-icon bg-gray-300 rounded-xl h-8 p-2 pb-10  text-3xl scale-90"><GrLanguage /></li>
                </ul>
            </div>
            <div className={` ${change} nav-head relative mt-6 text-white px-3 p-2`}>
                <div className='flex items-center justify-between'>
                    <div onClick={()=> setChange(change == false? true : false)} className={`${change} bug-con cursor-pointer `}>
                        <div className='bug bug1'></div>
                        <div className='bug bug1'></div>
                        <div className='bug bug2'></div>
                    </div>
                    <Toggle/>
                    <ul className='ul-nav flex gap-4 items-baseline'>
                        {
                            links.map((link, index) => (
                                <li key={index} className='text px-2 py-1'>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))
                        }
                        <DarkMode />
                    </ul>
                    <ul key={9} className='flex gap-3 scale-75'>
                        <li className='nav-i text-3xl '><FaFacebookF className='social-icon' /></li>
                        <li className='nav-i text-3xl '><TfiYoutube className='social-icon' /></li>
                        <li className='nav-i text-3xl '><FaTwitter className='social-icon' /></li>
                        <li className='nav-i text-3xl '><FaInstagram className='social-icon' /></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
