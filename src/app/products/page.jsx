'use client'
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { BsGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import './product.css'
import { SiHiveBlockchain } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { CartContext } from '../../../context/CartContext';
import Link from 'next/link';
import { ThemeContext } from '../../../context/ThemeContext';
import { SearchContext } from '../../../context/SearchContext';

export default function Page() {

    const { handleAddToCart} = useContext(CartContext)
    const { mode } = useContext(ThemeContext)
    const {store, store2, touched, setTouched, handleLiked} = useContext(SearchContext)
    console.log(store);
    console.log(store2);
    
    const [obtain, setObtain] = useState(" ")
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(false)
    const [indexval, setIndexval] = useState(0)
    
    useEffect(() => {
    async function getProduct() {
        const res = await fetch('api/products'); 
        if (!res.ok) {
            throw new Error('faild to fetch data')
        }
        setData(await res.json())
    }
    console.log(data);
      getProduct();
      // setObtain( store == " "? store2 : store)
      setObtain(store == " "? store2 : store2 == " " ? store : touched)
   console.log(obtain);
    }, [display, store, store2])


    const PopUp = () => {

        if (selected) {
          return (
            <div className={`${selected} pop-parent relative`}>
              <div onClick={() => setSelected(false)} className='fixed pop-container flex justify-center items-center'>
                <div className='pop-content relative'>
                  <div onClick={() => setSelected(false)} className={`${selected} nunitoextralight_italic close-pop absolute text-lg font-semibold`}>x</div>
                  <p className=' mb-5 text-center font-semibold text-xs text-green-600 '>Successfully added to cart</p>
                  <div className='flex pop-limit'>
                    <section className='pop-sec1 flex justify-center items-center gap-5 box-border overflow-hidden p-1 border-r-2'>
                      <div className='box-border overflow-hidden rounded-md'>
                        <Image src={indexval?.img} alt='cart item' height={300} width={300} />
                      </div>
                      <div className='flex flex-col justify-center gap-3'>
                        <h1 className='text-base font-semibold '>{indexval?.title.slice(0, 26)}</h1>
                        <h2 className='text-base font-semibold text-red-600'>{indexval?.price}</h2>
                        <span className='flex gap-2'><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></span>
                      </div>
                    </section>
                    <section className='pop-sec2 flex flex-col justify-center items-center gap-4'>
                      <Link href='/checkout' className='w-11/12'>
                        <button className=' rounded-md font-semibold text-sm py-2 w-full  bg-lime-600 text-white active:bg-orange-500'>Checkout</button>
                      </Link>
                      <Link className='w-11/12 ' href='/cart'>
                        <button className='  rounded-md text-base w-full  bg-slate-100 py-2 nunitoextralight_italic active:bg-orange-500' >View cart</button>
                      </Link>
                      <button className='  rounded-md text-base w-11/12 nunitoextralight_italic  py-2 bg-slate-100 active:bg-orange-500  ' onClick={() => setSelected(false)}>continue shoping</button>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }

 
          const returnSearch = data?.filter((item) =>{
        return (
          obtain.toLocaleLowerCase() === " " ? item : item.title.toLocaleLowerCase().includes(obtain.toLocaleLowerCase())
        )
      })

      console.log(returnSearch);
      let returnSearchQty = returnSearch.length
 
    


    return (
        <>

            <div className='flex gap-10  w-full bg-slate-100 box-border'>
                {PopUp()}
                <div className='side-bar flex flex-col gap-5'>
                    <section>
                        <ul style={mode == 'black' ? { color: 'black' } : { color: 'black' }} className='w-full nunitoextralight_italic flex flex-col gap-4 box-border p-3 bg-white rounded-lg '>
                            <h1 className=' text-xl nunitoextralight_italic'>Filter Categories</h1>
                            <li className='flex gap-2' ><input type="checkbox" name="items" /><span>Uncategorized</span></li>
                            <li className='flex gap-2' ><input type="checkbox" name="items" onClick={()=>setTouched('Bread & Bakery')} /><span>Bread & Bakery</span></li>
                            <li className='flex gap-2' ><input type="checkbox" name="items" onClick={()=>setTouched('Butter & Eggs')} /><span>Butter & Eggs</span></li>
                            <li className='flex gap-2' ><input type="checkbox" name="items" onClick={()=>setTouched('Canned Organic')} /><span>Canned Organic</span></li>
                            <li className='flex gap-2' ><input type="checkbox" name="items" onClick={()=>setTouched('Fresh Fruits')} /><span>Fresh Fruits</span></li>
                            <li className='flex gap-2' ><input type="checkbox" name="items" onClick={()=>setTouched('Fresh Meat')} /><span>Fresh Meat</span></li>
                            <li className='flex gap-2' ><input type="checkbox" name="items" onClick={()=>setTouched('Milk & Cream')} /><span>Milk & Cream</span></li>
                            <li className='flex gap-2' ><input type="checkbox" name="items" onClick={()=>setTouched('Vegitables')} /><span>Vegitables</span></li>
                        </ul>
                    </section>
                    <section className='w-full '>
                        <Image src='https://demo2.wpthemego.com/themes/sw_emarket/layout55/wp-content/uploads/2023/04/Banner2.png' alt='aside image' width={300} height={300} />
                    </section>
                    <section className="w-full">
                        <Image src='https://demo2.wpthemego.com/themes/sw_emarket/layout55/wp-content/uploads/2023/03/banner-55-4.png' alt='side image' width={300} height={300} />
                    </section>
                </div>
                <section className='main-parent w-10/12 flex flex-col gap-7 '>
                    <div>
                        <Image className='w-full ' src='https://demo2.wpthemego.com/themes/sw_emarket/layout55/wp-content/uploads/2023/04/Banner1.png' alt='intro' width={700} height={700} />
                    </div>
                    <div style={mode == 'black' ? { color: 'black' } : { color: 'black' }} className='flex justify-between items-center box-border rounded-2xl overflow-hidden p-3 px-5 bg-white '>
                        <select name="list" className='border w-1/6  px-3 rounded-md '>
                            <option value="sort">sort by</option>
                        </select>
                        <div className='flex gap-2'>
                            <span className=' align-middle flex items-center'>Show:</span>
                            <button className='border  px-4 py-1 pb-0 rounded-md '>{returnSearchQty}</button>
                        </div>
                        <div className='flex gap-3 relative'>
                            <FaListUl size={30} onClick={() => setDisplay(false)} className=' grid-i p-1 cursor-pointer rounded-md box-content  ' />
                            <BsGridFill size={30} onClick={() => setDisplay(true)} className=' grid-i2 p-1 cursor-pointer rounded-md box-content ' />
                            <span className=' absolute grid-span grid1 left-4 '>list view</span>
                            <span className=' absolute  grid-span grid2 right-0'>grid view</span>
                        </div>
                    </div>
                    <div>
                        {
                            display == false ?
                            returnSearch?.map((item, index) => (
                                    <div key={item._id} style={mode == 'black' ? { color: 'black' } : { color: 'black' }} className='card-hover product-item-list  border-2  box-border w-full p-3 rounded-xl mb-7 bg-white relative overflow-hidden '>
                                        <div className='product-img-con w-2/6'>
                                            <Link href={`/${item._id}`}>
                                                <Image className=' w-full' src={item.img} alt='content image' width={200} height={200} />
                                            </Link>
                                        </div>
                                        <div className='nunitoextralight_italic product-grid-sec flex flex-col gap-4 w-2/3 '>
                                            <h1 className=' text-xs nunitoextralight_italic font-normal ' style={{ color: 'gray' }}>{item.title.toUpperCase()}</h1>
                                            <p className='product-pg text-base'>{item.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore libero harum dolorem sed et adipisci Consequatur voluptas error quibusdam voluptatibus. Illo quaerat non nobis ea asperiores.</p>
                                            <h1>
                                                <FaStar color='gold' className='inline' />
                                                <FaStar color='gold' className='inline' />
                                                <FaStar color='gold' className='inline' />
                                                <FaStar color='gold' className='inline' />
                                            </h1>
                                            <h1 className=' text-orange-500 text-lg font-bold '>${item.price}</h1>
                                            <button onClick={() => {handleAddToCart(item); setIndexval(item); setSelected(true)}} className=' product-grid-btn btn-bg text-base nunitoextralight_italic font-semibold bg-neutral-100 px-9 py-3 rounded-lg nunitoextralight_italic'>ADD TO CART</button>
                                            <GiSelfLove className='absolute top-4 right-3 trans1 active:bg-orange-500 active:text-white ' size={35} onClick={()=> handleLiked(item)} />
                                            <SiHiveBlockchain className=' absolute top-12 mt-2 right-3 trans2' size={35} />
                                            <IoSearchOutline className=' absolute top-24   right-3 trans3' size={35} />
                                        </div>
                                    </div>
                                ))
                                :

                                <div className='grid grid-cols-3 gap-7 '>

                                    {returnSearch?.map((item, index) => {

                                        return (
                                            <div key={item._id} style={mode == 'black' ? { color: 'black' } : { color: 'black' }} className='item product-item-list card-hover  flex flex-col justify-center items-center gap-3 box-border p-4 rounded-2xl relative overflow-hidden bg-white'>
                                                <Link href={`/${item._id}`}><Image className='m-auto  w-4/5' src={item.img} alt='content image' width={200} height={200} /></Link>
                                                <h1 className=' text-xs nunitoextralight_italic font-normal ' style={{ color: 'gray' }}>{item.title.toUpperCase().slice(0, 26)}...</h1>
                                                <p className=' text-base font-normal'>{item.description}</p>
                                                <h1>
                                                    <FaStar color='gold' className='inline' />
                                                    <FaStar color='gold' className='inline' />
                                                    <FaStar color='gold' className='inline' />
                                                    <FaStar color='gold' className='inline' />
                                                </h1>
                                                <h1 className=' text-orange-500 text-lg font-bold '>${item.price}</h1>

                                                <button onClick={() => {handleAddToCart(item); setIndexval(item); setSelected(true)}} className=' btn-bg text-sm  nunitoextralight_italic font-semibold bg-neutral-100 px-9 py-3 rounded-lg'>ADD TO CART</button>
                                                <GiSelfLove className='absolute top-4 right-3 trans1 active:bg-orange-500 active:text-white' size={35} onClick={()=> handleLiked(item)} />
                                                <SiHiveBlockchain className=' absolute top-12 mt-2 right-3 trans2' size={35} />
                                                <IoSearchOutline className=' absolute top-24   right-3 trans3' size={35} />
                                            </div>


                                        )
                                    })}

                                </div>

                        }
                    </div>
                </section>
            </div>
        </>
    )
}
