'use client'
import Hero from "../components/Hero/page";
import './homepage.css'
import Image from "next/image";
import { GiMasonJar, GiEasterEgg } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { LuApple, LuMilk, LuPalmtree } from "react-icons/lu";
import { PiBreadBold } from "react-icons/pi";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export default function Home() {
  
  const {mode} = useContext(ThemeContext)
 


  return (
    <>
      <div className="parent-to-3 bg-gray-100 relative box-border mb-10 py-8 pt-4">
        <div className="parent-to-3 flex justify-between gap-3 w-full ">

          <ul className="cat-shop-container bg-white " style={mode == 'black' ? { color: 'black' } : { color: 'black' }}>
            <h1 className="cat-shop-head bg-lime-500 text-white">SHOP BY CATEGORIES</h1>
            <h1 className="span-li"><li className="cat-shop px-3 py-3" ><LuPalmtree className=" inline" size={22} /> Vegitables</li></h1>
            <h1 className="span-li"><li className="cat-shop px-3 py-3" ><LuApple className=" inline" size={22} /> Fresh Fruits</li></h1>
            <h1 className="span-li"><li className="cat-shop px-3 py-3" ><TbMeat className=" inline" size={22} /> Fresh Meat</li></h1>
            <h1 className="span-li"><li className="cat-shop px-3 py-3" ><GiMasonJar className=" inline" size={22} />Canned Organic</li></h1>
            <h1 className="span-li"><li className="cat-shop px-3 py-3" ><GiEasterEgg className=" inline" size={22} />Butter & Eggs</li></h1>
            <h1 className="span-li"><li className="cat-shop px-3 py-3" ><LuMilk className=" inline" size={22} /> Milk & Cream</li></h1>
            <h1 className="span-li"><li className="cat-shop px-3 py-3" ><GiMasonJar className=" inline" size={22} />Oil & Vinegars</li></h1>
            <h1 className="span-li"><li className="cat-shop px-3 py-3" ><PiBreadBold className=" inline" size={22} /> Bread & Bakery</li></h1>
         </ul>
          <div className="img-1">
            <Image className="side-cat-image" src="https://demo2.wpthemego.com/themes/sw_emarket/layout55/wp-content/uploads/2023/03/Index_55_2.jpg" alt="background" width={500} height={500} />
          </div>

          <div className="img-2">
            <Image className="side-image-1-3" src='https://demo2.wpthemego.com/themes/sw_emarket/layout55/wp-content/uploads/2023/03/banner-55-4.png' alt='side image' width={200} height={200} />
          </div>

        </div>
      </div>
      <Hero />
    </>
  );
}
