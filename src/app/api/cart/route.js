import Cart from "@/models/Cart";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        // connect to database
        await connectDB();

        // find all the posts in the database
        const posts = await Cart.find()
        console.log(posts);

        //return the posts as a json when successful
        return new NextResponse(JSON.stringify(posts),{status: 200});  
    } catch (error) {
        console.log(error);

        // if there is an error, return a 500 status code
        return new NextResponse('Database Error',{status: 500});
    }
}


//create a new database card

export const POST = async (req)=> {

    const { title, description, img, content } = await req.json();

    cloudinary.config({
        cloud_name:  process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET

    });
    const uploadResult = await cloudinary.uploader.upload(img, {
        public_id: title,
    }).catch((error) => console.log(error));
    console.log('after:', uploadResult?.secure_url);

    await connectDB();
    
    try {
        const post = new Cart({
            title,
            description,
            img: uploadResult?.secure_url,
            content,
            price
        });

        await post.save();

    }catch(error){
        return new NextResponse('Database Error', {status: 500});
    }
}