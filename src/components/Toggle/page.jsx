'use client'
import React, { useContext, useState } from 'react'
import { GiMasonJar, GiEasterEgg } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { LuApple, LuMilk, LuPalmtree } from "react-icons/lu";
import { PiBreadBold } from "react-icons/pi";
import { ThemeContext } from '../../../context/ThemeContext';
import '../Navbar/nav.css'
import Link from 'next/link';
import DarkMode from '../DarkModeToggle/DarkMode';

export default function Toggle() {
    const { mode, change, setChange } = useContext(ThemeContext)
    const [vertical, setVertical] = useState(false)


    const links = [
        { name: 'Home', href: '/' },
        { name: 'Checkout', href: '/checkout' },
        { name: 'Dashboard', href: '/dashboard/posts' },
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
        { name: 'Cart', href: '/cart' },
    ]

    return (
        <div className={`absolute only-screen ${change} nunitoextralight_italic`}>
            <button onClick={() => setChange(false)} className='text-2xl bg-red-600 close absolute'>x</button>
            <div className='flex justify-center items-center cursor-pointer bg-white h-12 '><h1 onClick={() => setVertical(true)} className=' text-black w-2/4 box-border h-full pt-3 pl-5 cursor-pointer '>Primary Menu</h1><h1 onClick={() => setVertical(false)} className=' text-black box-border w-2/4 pl-5 bg-slate-200 pt-3 h-full cursor-pointer'>Vertival Menu</h1></div>
            {
                vertical == true ?
                    <ul className='ul-nav3 flex flex-col items-baseline'>
                        {
                            links.map((link, index) => (
                                <Link href={link.href} className='w-full'>
                                    <li key={index} className='span-tag text border-b p-3 w-full'>
                                        {link.name}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                    :
                    <ul className="ul-nav2" style={mode == 'black' ? { color: 'black' } : { color: 'black' }}>
                        <h1 className="bg-red-700 py-3 pl-3 text-white">SHOP BY CATEGORIES</h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" ><LuPalmtree className=" inline" size={22} /> Vegitables</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" ><LuApple className=" inline" size={22} /> Fresh Fruits</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" ><TbMeat className=" inline" size={22} /> Fresh Meat</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" ><GiMasonJar className=" inline" size={22} />Canned Organic</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" ><GiEasterEgg className=" inline" size={22} />Butter & Eggs</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" ><LuMilk className=" inline" size={22} /> Milk & Cream</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" ><GiMasonJar className=" inline" size={22} />Oil & Vinegars</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" ><PiBreadBold className=" inline" size={22} /> Bread & Bakery</li></h1>
                    </ul>
            }
        </div >
    )
}
