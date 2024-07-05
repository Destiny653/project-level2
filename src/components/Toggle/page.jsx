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
import { SearchContext } from '../../../context/SearchContext';
import { useRouter } from 'next/navigation';

export default function Toggle() {
    const { mode, change, setChange } = useContext(ThemeContext)
    const {setStore2} = useContext(SearchContext)
    const [vertical, setVertical] = useState(false)
    const navigation = useRouter()


    const links = [
        {name: 'Home', href: '/'},
        {name: 'Checkout', href: '/checkout' },
        {name: 'Login', href: '/login' },
        {name: 'Register', href: '/register'},
        {name: 'Cart', href: '/cart'},
    ]

    return (
        <div className={`absolute only-screen ${change} nunitoextralight_italic`}>
            <button onClick={() => setChange(false)} className='text-2xl bg-red-600 close absolute'>x</button>
            <div className='flex justify-center items-center cursor-pointer bg-white h-12 '><h1 onClick={() => setVertical(true)} className=' text-black w-2/4 box-border h-full pt-3 pl-5 cursor-pointer nav-switch '>Nav Menu</h1><h1 onClick={() => setVertical(false)} className=' text-black box-border w-2/4 pl-5 bg-slate-200 pt-3 h-full cursor-pointer nav-switch'>Category</h1></div>
            {
                vertical == true ?
                    <ul className='ul-nav3 flex flex-col items-baseline'>
                        {
                            links.map((link, index) => (
                                <Link key={index} href={link.href} className='w-full'>
                                    <li className='span-tag text border-b p-3 w-full'>
                                        {link.name}
                                    </li>
                                </Link>
                            ))
                        }
                        <div className='flex items-center gap-3 mt-2'>
                        <span>Change theme</span>
                            <DarkMode />
                        </div>
                    </ul>
                    :
                    <ul key={12} className="ul-nav2" style={mode == 'black' ? { color: 'black' } : { color: 'black' }}>
                        <h1 className="bg-red-700 py-3 pl-3 text-white">SHOP BY CATEGORIES</h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" onClick={()=>{setStore2(' '); navigation.push('/products')}} >All</li></h1>              
                        <h1 className="text-white span-li"><li className=" px-3 py-3" onClick={()=>{setStore2('vegitables'); navigation.push('/products')}} ><LuPalmtree className=" inline" size={22} /> Vegitables</li></h1>              
                        <h1 className="text-white span-li"><li className=" px-3 py-3" onClick={()=>{setStore2('fruits'); navigation.push('/products')}} ><LuApple className=" inline" size={22} /> Fresh Fruits</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" onClick={()=>{setStore2('meat'); navigation.push('/products')}} ><TbMeat className=" inline" size={22} /> Fresh Meat</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" onClick={()=>{setStore2('canned organic'); navigation.push('/products')}} ><GiMasonJar className=" inline" size={22} />Canned Organic</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" onClick={()=>{setStore2('butter & eggs'); navigation.push('/products')}} ><GiEasterEgg className=" inline" size={22} />Butter & Eggs</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" onClick={()=>{setStore2('milk & cream'); navigation.push('/products')}} ><LuMilk className=" inline" size={22} /> Milk & Cream</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" onClick={()=>{setStore2('oil & vinegar'); navigation.push('/products')}} ><GiMasonJar className=" inline" size={22} />Oil & Vinegars</li></h1>
                        <h1 className="text-white span-li"><li className=" px-3 py-3" onClick={()=>{setStore2('bread & bakery'); navigation.push('/products')}} ><PiBreadBold className=" inline" size={22} /> Bread & Bakery</li></h1>
                    </ul>
            }
        </div >
    )
}
