import React, { useContext } from 'react'
import { SearchContext } from '../../../context/SearchContext'

export default function PopUp({data}) {

    const {selected, setSelected} = useContext(SearchContext)
  
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
                        <Image src={data?.img} alt='cart item' height={300} width={300} />
                      </div>
                      <div className='flex flex-col justify-center gap-3'>
                        <h1 className='text-base font-semibold '>{data?.title.slice(0, 26)}</h1>
                        <h2 className='text-base font-semibold text-red-600'>${data?.price}</h2>
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
