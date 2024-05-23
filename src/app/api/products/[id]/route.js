import Product from "@/models/Product";
import connectDB from "@/utils/db";
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';


//route segment for sorting elements by Id

export const GET = async (req,{params}) => {
    console.log(params);
   const {id} = params;

   try{
       await connectDB();
       const post = await Product.findById(id)
       return new NextResponse(JSON.stringify(post), { status: 200 });
   }catch(error){
       return new NextResponse('Database Error', {status: 500})
   }
}


export const DELETE = async (req,{params}) => {
    const {id} = params;
    await connectDB();

    //deleting image from cloudinary

    try {

        //Configuring cloudinary
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
    
        });

        const post = await Product.findById(id);
        console.log('Product:', post);
        cloudinary.api.delete_resources([post.title], {
            type: 'upload',
            resource_tupe: 'image',
        }).then(console.log)
        
    } catch (error) {
        console.log(error);
        return new NextResponse('Cloudinary Image not deleted', {status: 500})
    }

    //deleting product from database by id in mongoose

    try{
        const post = await Product.findByIdAndDelete(id)
        return new NextResponse(JSON.stringify(post), {message: 'Product deleted successfully', status: 200 });
    }catch(error){
        return new NextResponse('Database Error', {status: 500})
    }
}