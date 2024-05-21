'use client'
import Image from 'next/image';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from 'react-icons/fa6';
import React, { useContext, useEffect, useState } from 'react';
import './hero.css';
import '../Navbar/nav.css';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import farmers from '../product/product';
import services from '../product/service';
import { SiHiveBlockchain } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { CartContext } from '../../../context/CartContext';
import Link from 'next/link';
import { ThemeContext } from '../../../context/ThemeContext';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';





var $ = require("jquery");
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require("jquery");
}


const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Hero() {

  const { mode } = useContext(ThemeContext)
  const { handleAddToCart, store } = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(false)
  const [indexval, setIndexval] = useState(0)


  const [dataone, setDataone] = useState([])
  const [datatwo, setDatatwo] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch('http://localhost:3000/api/posts');

      if (!res.ok) {
        throw new Error('faild to fetch data')
      }
      setDataone(await res.json())

    }
    async function newData() {
      const res = await fetch('http://localhost:3000/api/products');
      if (!res.ok) {
        throw new Error('faild to fetch data')
      }

      setDatatwo(await res.json())

    }



    getData();
    newData();
  }, [])
  //owl carousel

  const PopUp = () => {

    if (selected) {
      return (
        <div className={`${selected} pop-parent relative`}>
          <div onClick={() => setSelected(false)} className='fixed pop-container flex justify-center items-center'>
            <div className='pop-content relative'>
              <div onClick={() => setSelected(false)} className={`${selected} roboto close-pop absolute text-lg font-semibold`}>x</div>
              <p className=' mb-5 text-center font-semibold text-xs text-green-600 '>Successfully added to cart</p>
              <div className='flex pop-limit'>
                <section className=' w-3/5 flex justify-center items-center gap-5 box-border overflow-hidden p-2 border-r-2 pl-4'>
                  <div className='box-border overflow-hidden rounded-md'>
                    <Image src={datatwo[indexval]?.img} alt='cart item' height={300} width={300} />
                  </div>
                  <div className='flex flex-col justify-center gap-3'>
                    <h1 className='text-base font-semibold '>{datatwo[indexval]?.title.slice(0, 26)}</h1>
                    <h2 className='text-base font-semibold text-red-600'>{datatwo[indexval]?.price}</h2>
                    <span className='flex gap-2'><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></span>
                  </div>
                </section>
                <section className=' w-2/5 flex flex-col justify-center items-center gap-4'>
                  <Link href='checkout' className='w-11/12'>
                    <button className=' rounded-md font-semibold text-sm py-2 w-full  bg-lime-600 text-white active:bg-orange-500'>Checkout</button>
                  </Link>
                  <h3 className=' text-xs'>Order Subtotal</h3>
                  <h1 className='text-xl font-semibold '>${store}</h1>
                  <Link className='w-11/12 ' href='./cart'>
                    <button className='  rounded-md text-base w-full  bg-slate-100 py-2 roboto active:bg-orange-500' >View cart</button>
                  </Link>
                  <button className='  rounded-md text-base w-11/12 roboto  py-2 bg-slate-100 active:bg-orange-500  ' onClick={() => setSelected(false)}>continue shoping</button>
                </section>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    autoplayTimeout: 3000,
    navClass: ["owl-prev", "owl-next"],
    navText: ['<i class="fas" fa-angle-left></i>', '<i class="fas" fa-angle-right></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  }



  return (
    <div className='hero-parent w-full flex flex-col gap-12 relative' >
      <LoadingOverlay >

        {PopUp()}

        <div>
          <h1 className='title-head text-3xl font-bold text-lime-400 dancing text-center'>Our Story</h1>
          <h1 className='title-des text-center text-5xl font-extrabold nunito'>Fetured Categories</h1>
          <div className='post-roll-con grid grid-flow-col mx-7 mt-9  overflow-x-scroll' style={mode == 'black' ? { color: 'black' } : { color: 'black' }}>



            {
              dataone.map((item) => {
                return (
                  <div key={item._id} className=' item w-100 roll-img-con flex flex-col justify-center items-center bg-lime-300 gap-4 p-4 mx-6 rounded-full  rounded-t-full '>
                    <Image className=' w-100 rounded-full roll-img  w-full  adjust-img-h ' src={item.img} alt='content image' width={200} height={200} />
                    <h1 className='  text-sm roboto font-semibold relative right-4 bg-white p-2 rounded-lg  '>{item.title.slice(0, 14)}</h1>
                  </div>
                )
              })
            }


          </div>
        </div>
        <div className='flex opt-container justify-center w-full items-center' style={mode == 'black' ? { color: 'black' } : { color: 'black' }}>
          <section className='roboto  flex items-center justify-center flex-col box-border w-2/4  gap-5 '>
            <h1 className='title-head flex justify-center items-center text-3xl font-bold text-lime-400 dancing ' >Deals of the Day</h1>
            <p className='title-des flex justify-center text-center text-5xl font-extrabold '>Grab The Best Offer of This Week!</p>
            <h2 className='flex justify-center items-center text-center  text-xl font-extrabold'>Hurry up! Offers ends soon</h2>
            <p className='text-sm font-normal' style={{ color: '#666666' }}>Please select a time for layout</p>
            <Link href='/products'>
              <button onClick={()=> setLoading(true)} className=' btn-bg bg-lime-500 px-9 py-3 rounded-lg text-white font-medium'>VIEW ALL</button>
            </Link>
          </section>
          <section className='deals-of-day-p w-2/4   mx-6 flex justify-center items-center gap-5 '>
            {
              datatwo.slice(8, 11).map((item, index) => {
                return (
                  <div key={item._id} className='deals-of-day-i card-hover roboto flex justify-center items-center flex-col box-border p-2 py-8 relative  overflow-hidden bg-white gap-3 rounded-3xl' style={mode == 'black' ? { color: 'black' } : { color: 'black' }}>
                    <Loader loading={loading} />
                    <Link href={`/${item._id}`}>
                      <Image onClick={() => setLoading(true)} className='m-auto  opt-img size-4/5' src={item.img} alt='content image' width={400} height={400} />
                    </Link>
                    <h1 className=' text-xs nunito font-normal ' style={{ color: 'gray' }}>{item.title.slice(0, 29).toUpperCase()}...</h1>
                    <p className=' text-base font-bold'>{item.description}</p>
                    <h1>
                      <FaStar color='gold' className='inline' />
                      <FaStar color='gold' className='inline' />
                      <FaStar color='gold' className='inline' />
                      <FaStar color='gold' className='inline' />
                    </h1>
                    <h1 className=' text-orange-500 text-lg font-bold '>${item.price}</h1>
                    <button onClick={() => { handleAddToCart(item); setIndexval(index); setSelected(true) }} className='btn-bg text-sm  roboto font-semibold  bg-neutral-100 px-9 py-3 rounded-lg'>ADD TO CART</button>
                    <GiSelfLove className='absolute top-4 right-3 trans1 ' size={35} />
                    <SiHiveBlockchain className=' absolute top-12 mt-2 right-3 trans2' size={35} />
                    <IoSearchOutline className=' absolute top-24   right-3 trans3' size={35} />
                  </div>
                )
              })
            }
          </section>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <section>
            <h1 className='title-head text-3xl font-bold text-lime-400 dancing text-center'>Todays Fresh</h1>
            <p className='title-des roboto text-5xl font-extrabold text-center'>New Arrivals</p>
          </section>
          <section className='arrivals-p flex justify-center items-center gap-4 box-border p-4'>
            {
              datatwo.slice(0, 5).map((item, index) => {
                return (
                  <div key={item._id} className='bg-white  relative item card-hover w-100 flex flex-col justify-center items-center gap-3 box-border overflow-hidden p-4 rounded-2xl ' style={mode == 'black' ? { color: 'black' } : { color: 'black' }}>
                    <Loader loading={loading} />
                    <Link href={`/${item._id}`}>
                      <Image onClick={() => setLoading(true)} className=' m-auto  w-4/5' src={item.img} alt='content image' width={200} height={200} />
                    </Link>
                    <h1 className=' text-xs nunito font-normal ' style={{ color: 'gray' }}>{item.title.toUpperCase().slice(0, 23)}...</h1>
                    <p className=' text-base font-bold'>{item.description}</p>
                    <h1>
                      <FaStar color='gold' className='inline' />
                      <FaStar color='gold' className='inline' />
                      <FaStar color='gold' className='inline' />
                      <FaStar color='gold' className='inline' />
                    </h1>
                    <h1 className=' text-orange-500 text-lg font-bold '>${item.price}</h1>
                    <button onClick={() => { handleAddToCart(item); setIndexval(index); setSelected(true) }} className='btn-bg text-sm  roboto font-semibold bg-neutral-100 px-9 py-3 roboto rounded-xl '>ADD TO CART</button>
                    <GiSelfLove className='absolute top-4 right-3 trans1 ' size={35} />
                    <SiHiveBlockchain className=' absolute top-12 mt-2 right-3 trans2' size={35} />
                    <IoSearchOutline className=' absolute top-24   right-3 trans3' size={35} />
                  </div>
                )
              })
            }
          </section>
        </div>
        <div className='shop-now-p flex items-center justify-center gap-5 m-10' style={mode == 'black' ? { color: 'black' } : { color: 'black' }}>
          <div className='roboto shop-now-i hero-img1 w-3/6'>
            <div className=' flex flex-col gap-4  relative top-14  left-14 '>
              <h1 className=' text-xl font-bold text-lime-500 '>Energize from nature</h1>
              <h1 className='title-des text-5xl font-extrabold'>Everyday Fresh <br /> with Organic</h1>
              <Link href='/product'>
                <button onClick={()=> setLoading(true)}  className=' w-fit btn-bg bg-lime-500 px-9 py-3 rounded-lg text-white font-medium' >SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-3/6 shop-now-i gap-5'>
            <section className='roboto  w-full hero-img2'>
              <div className=' w-full flex flex-col gap-4 relative top-6  left-6'>
                <h1 className=' text-xl font-bold text-lime-500 ' >Up to 40% off</h1>
                <h1 className='title-des text-5xl font-extrabold'>Muscat grapes</h1>
                <Link href='/product'>
                  <button onClick={()=> setLoading(true)}  className=' w-fit btn-bg bg-lime-500 px-9 py-3 rounded-lg text-white font-medium'>SHOP NOW</button>
                </Link>
              </div>
            </section>
            <section className='roboto  w-full hero-img3'>
              <div className=' w-full flex flex-col gap-4 relative top-6  left-6'>
                <h1 className=' text-xl font-bold text-lime-500 '> Up to 50% Off</h1>
                <h1 className='title-des text-5xl font-extrabold'>Wagyu Geef</h1>
                <Link href='/product'>
                  <button onClick={()=> setLoading(true)}  className=' w-fit bgn-bg bg-lime-500 px-9 py-3 rounded-lg text-white font-medium'>SHOP NOW</button>
                </Link>
              </div>
            </section>
          </div>
        </div>
        <div className='service-p flex items-center justify-center gap-5 m-10'>
          <section className='service-img w-3/6'>
            <Image className=' w-11/12 woman-present ' src='https://demo2.wpthemego.com/themes/sw_emarket/layout55/wp-content/uploads/2023/04/banner-55-10-600x578.png' alt='content image' width={600} height={600} />
          </section>
          <section className='service-block roboto  w-3/6 flex flex-col gap-5 box-border'>
            <h1 className='title-head text-3xl font-bold text-center dacing' >Why Choose us?</h1>
            <h1 className='title-des text-5xl text-center font-extrabold'>We will bring you the best food!</h1>
            <p className='text-base font-normal text-zinc-400 '>Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.</p>
            <ul className='roboto  flex flex-col gap-5 box-border'>
              {
                services.map((service, index) => {
                  return (
                    <li key={index} className='roboto service-con flex gap-5 '>
                      <img className=' size-20 ' src={service.img} alt="" />
                      <div className='flex flex-col justify-center'>
                        <h1 className='service-title text-2xl font-bold '>{service.title}</h1>
                        <p className='service-text text-base font-normal text-zinc-400'>{service.desc}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        </div>
        <div className='farmers-bg flex flex-col justify-center items-center'>
          <h1 className='title-head dancing text-3xl font-bold text-lime-500'>Today's Fresh</h1>
          <h1 className='title-des roboto text-5xl font-extrabold text-center'>Our Farmers</h1>
          <ul className='farmers-parent flex items-center justify-center gap-6 m-10'>
            {
              farmers.map((farmer, index) => {
                return (
                  <li style={mode == 'black' ? { color: 'black' } : { color: 'black' }} className='farmer-item  box-border p-5 gap-5 rounded-2xl farm-bg items-center' key={index}>
                    <div className=' box-border mb-3  overflow-hidden rounded-xl'>
                      <Image className=' rounded-xl hover:scale-110 duration-1000 ' src={farmer.img} alt={farmer.name} width={400} height={400} />
                    </div>
                    <h1 className='nunito farmers-name text-2xl mb-4  font-bold'>{farmer.name}</h1>
                    <span className=' mb-3  nunito text-base font-normal text-stone-400'>{farmer.desc}</span>
                    <ul className='flex justify-center items-center'>
                      <li className='text-3xl '><FaFacebookF className='social-icon' /></li>
                      <li className='text-3xl '><FaTwitter className='social-icon' /></li>
                      <li className='text-3xl '><FaInstagram className='social-icon' /></li>
                      <li className='text-3xl '><FaGooglePlusG className='social-icon' /></li>
                    </ul>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </LoadingOverlay>
    </div >
  )
}
