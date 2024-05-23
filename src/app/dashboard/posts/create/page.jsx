'use client'
import React, { useContext, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'
import './create.css'
import { ThemeContext } from '../../../../../context/ThemeContext'

const Page = () => {

    const navigation = useRouter();

    const { mode } = useContext(ThemeContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [rate, setRate] = useState('')
    const [price, setPrice] = useState('')


    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: 'right',
            y: 'top'
        }
    });


        const { data: session  } = useSession()
 


    const handleSubmit = async (e) => {
        e.preventDefault();

        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = async () => {
            const base64Image = reader.result;
            console.log(img);
            console.log('Base64 reprresentation:', base64Image);

            try {
                const response = await fetch("http://localhost:3000/api/products", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        img: base64Image,
                        rate,
                        price
                    }),
                });
                if (response.status === 201) {
                    const result = await response.json();
                    console.log(result);
                    notyf.success('succefully created');
                    navigation.push('/dashboard/posts');
                } else {
                    notyf.error('Creation error')
                }
            } catch (e) {
                console.log(e);
                notyf.error('error')
            }
        }
    };

    const handleImageDisplay = () => {
        if (img) {
            return (
                <div>
                    <Image src={URL.createObjectURL(img)} alt="Selected Image" width={600} height={600} />
                </div>
            );
        } else {
            return <div></div>;
        }
    };


    return (
        <div className='relative box-border py-8'>
            <div className='container box-border flex items-center justify-between '>
                <div className='sign-card flex gap-5' style={mode == 'light' ? { color: 'black' } : { color: 'white' }}>
                    <form onSubmit={handleSubmit} className=' box-border overflow-hidden form'>
                        <div className=' mb-3 flex flex-col'>
                            <h1 className=' text-3xl m-auto'>Create Post</h1>
                            <label htmlFor="text" className=' pb-1'>
                                Title
                            </label>
                            <input type="text" value={title} name='text' placeholder='Enter Title...' className=' rounded-3xl form-control py-3 px-4 border' onChange={e => setTitle(e.target.value)} required />
                        </div>
                        <div className=' mb-6 flex flex-col'>
                            <label htmlFor="text" className=' pb-1'>
                                Description
                            </label>
                            <input type="text" value={description} name='text' placeholder='Enter description' className=' rounded-3xl form-control py-3 px-4 border' onChange={e => setDescription(e.target.value)} required />
                        </div>
                        <div className=' mb-6 flex flex-col'>
                            <label htmlFor="text" className=' pb-1'>
                                Rating
                            </label>
                            <input type="number" value={rate} name='text' placeholder='Rate from 1-5 ex: 3.4' className=' rounded-3xl form-control py-3 px-4 border' onChange={e => setRate(e.target.value)} required />
                        </div>
                        <div className=' mb-6 flex flex-col'>
                            <label htmlFor="text" className=' pb-1'>
                                Price
                            </label>
                            <input type="number" value={price} name='text' placeholder='Enter price' className=' rounded-3xl form-control py-3 px-4 border' onChange={e => setPrice(e.target.value)} required />
                        </div>
                        <div className=' mb-6 flex flex-col'>
                            <label htmlFor="text" className=' pb-1'>
                                Image
                            </label>
                            <input
                                type='file'
                                name='file'
                                required
                                accept='image/png, imapge/jpg, image/jpeg'
                                className=' rounded-3xl form-control py-2 px-4 border'
                                onChange={e => { setImg(e.target.files[0]); }} />
                        </div>
                        <button className='button  border py-2 mt-5  bg-slate-200 rounded-3xl ' type='submit'>
                            Create
                        </button>
                    </form>
                    <div className={`img-con`}>
                        {handleImageDisplay()}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page
