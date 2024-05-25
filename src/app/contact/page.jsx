'use client'
import React, { useContext, useRef } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import emailjs from '@emailjs/browser';
import '../homepage.css';
import { ThemeContext } from '../../../context/ThemeContext';
import './contact.css';


const Page = () => {

    const {mode} = useContext(ThemeContext)


    const form = useRef()
   

    const handleEmail = (e) => {

        e.preventDefault()
        const name = e.target.name.value
        form.current.value = ""
        console.log(name);
        emailjs.sendForm('service_yok3ejb', 'template_njb1bre', form.current, {
            publicKey: 'ie3XvRbY2rSalRh40',
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
            <div className={`container-small`} style={mode == 'light' ? {color:'black'} : {color:'black'}}>
                <form className={`form-small`} ref={form} onSubmit={handleEmail} action='' method='post'>
                    <label className={`lebel-small`}>
                        <input className={`input-small`} type="text" name='name' ref={form} placeholder="Name" />
                    </label>
                    <fieldset className='flex w-full justify-center items-center gap-3'>
                        <label className={`lebel-small w-full`}>
                            <input className={`input-small w-full`} type="email" name='email' ref={form} placeholder="ex = name@gmail.com" />
                        </label>
                        <label className={`lebel-small w-full`}>
                            <input className={`input-small`} type="tel" name='phone' ref={form} placeholder='Phone number' />
                        </label>
                    </fieldset>
                    <label className={`lebel-small`}>
                        <textarea className={`input-samll`} name="message" id="textArea" ref={form} cols="6" rows="4" placeholder='Your message'></textarea>
                    </label>
                    <button className={`button-small`}>Send</button>
                </form>
            </div>
        </>
    )
}

export default Page
