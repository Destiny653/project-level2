import React from 'react'
import { TfiYoutube } from 'react-icons/tfi';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import './footer.css';
import Contact from '@/app/contact/page';


export default function Footer() {
    return (
        <footer className='nunitoextralight_italic flex flex-col items-center justify-center gap-5 box-border py-10 pb-5  foot-bg text-white'>
            <section className='foot-sub-p flex gap-8 mx-5'>
                <div className='foot-title flex flex-col gap-5'>
                    <h1 className='foot-title text-xl font-bold text-lime-500 nunitoextralight_italic'>Contact us</h1>
                    <p className='text-base font-normal text-zinc-400 mb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae et, omnis delectus debitis laudantium veniam, ipsum animi quae consequatur laborum illum tenetur quo, dignissimos odio ab corporis! Fugit, ab!</p>
                    <div className='footer-section flex justify-start gap-32  '>
                        <section className='flex flex-col gap-10 '>
                            <div>
                                <h1 className='foot-title text-xl font-bold nunitoextralight_italic'>Call Us</h1>
                                <h1 className='text-base font-normal text-zinc-400 '>phone</h1>
                                <span className='text-base font-normal text-zinc-400 '>+91 9876543210</span>
                            </div>
                            <div>
                                <h1 className='foot-title text-xl font-bold nunitoextralight_italic'>Send Us</h1>
                                <h1 className='text-base font-normal text-zinc-400'>Email</h1>
                                <span className='text-base font-normal text-zinc-400 '>agricult@gmail.com</span>
                            </div>
                        </section>
                        <section className='flex flex-col gap-10 '>
                            <div>
                                <h1 className='foot-title text-xl font-bold nunitoextralight_italic'>Our Location</h1>
                                <p className='text-base font-normal text-zinc-400 '>Emarket Business Consulting 123</p>
                                <p className='text-base font-normal text-zinc-400 '>Porto Blvd, Suite 100 New York, NY</p>
                            </div>
                            <div>
                                <ul className='flex gap-3 scale-75'>
                                    <li className=' foot-icon p-2 rounded-full text-3xl '><FaFacebookF className='social-icon' color='black' size={32} /></li>
                                    <li className=' foot-icon p-2 rounded-full text-3xl '><TfiYoutube className='social-icon' color='black' size={32} /></li>
                                    <li className=' foot-icon p-2 rounded-full text-3xl '><FaTwitter className='social-icon' color='black' size={32} /></li>
                                    <li className=' foot-icon p-2 rounded-full text-3xl '><FaInstagram className='social-icon' color='black' size={32} /></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='foot-title text-xl font-bold nunitoextralight_italic'>Talk with Us</h1>
                    <p className='text-base font-normal text-zinc-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur dolorum eaque aut fugit. Laudantium, officia ab. Dolore rem vitae fuga. Fugiat non nemo quod! Ut suscipit harum perspiciatis cupiditate.</p>
                    <Contact />
                    <Link href='contact'>
                        <button><details className='contact-btn text-xl px-2 py-4 font-bold text-lime-500 nunitoextralight_italic'></details></button>
                    </Link>
                </div>
            </section>
            <p className='text-base font-normal text-zinc-400 border-t w-full text-center pt-4 mx-4'>Copyright &copy 2010-2024 Youtech Company S.L All rights reserved.</p>
        </footer>
    )
}
