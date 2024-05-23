'use client'
import React, { useContext, useRef } from 'react';
import style from './contact.module.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import emailjs from '@emailjs/browser';
import '../homepage.css';
import { ThemeContext } from '../../../context/ThemeContext';


const Contact = () => {

    const {mode} = useContext(ThemeContext)


    const form = useRef()
    //    const {toggle,mode} = useContext(ThemeContext)

    //declare notification variable

    const handleEmail = (e) => {

        e.preventDefault()
        const name = e.target.name.value
        form.current.value = ""
        console.log(name);
        emailjs.sendForm( process.env.SERVICE, process.env.TEMPLATE, form.current, {
            publicKey:process.env.PUBLICKEY,
        }).then((res) => {
            console.log(res);
            notyf.success('Email sent succesfully!!')
        }).catch(err => {
            console.log(err);
            notyf.error('Please fill the form!!')
        })

        const notyf = new Notyf({
            duration: 3000,
            position: {
                x: 'right',
                y: 'top'
            }
        })
    }


    return (
        <>
            <div className={` ${style.container} foot-contact`} style={mode == 'light' ? {color:'black'} : {color:'black'}}>
                <form className={style.form} ref={form} onSubmit={handleEmail} action='' method='post'>
                    <label className={style.lebel}>
                        <input className={style.input} type="text" name='name' ref={form} placeholder="Name" />
                    </label>
                    <fieldset className='flex w-full justify-center items-center gap-3'>
                        <label className={`${style.lebel} w-full`}>
                            <input className={`${style.input} w-full`} type="email" name='email' ref={form} placeholder="ex = name@gmail.com" />
                        </label>
                        <label className={`${style.lebel} w-full`}>
                            <input className={style.input} type="tel" name='phone' ref={form} placeholder='Phone number' />
                        </label>
                    </fieldset>
                    <label className={style.lebel}>
                        <textarea className={style.input} name="message" id="textArea" ref={form} cols="6" rows="4" placeholder='Your message'></textarea>
                    </label>
                    <button className={style.button}>Send</button>
                </form>
            </div>
        </>
    )
}

export default Contact
