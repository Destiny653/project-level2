 import Post from "@/models/Post";
import connectDB from "@/utils/db"
import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
import { ApiError } from "next/dist/server/api-utils";


//get all posts from the database

export const GET = async () => {
    try {
        // connect to database
        await connectDB();

        // find all the psts in the database
        const posts = await Post.find().sort({ createdAt: -1})
        console.log(posts);

        //return the posts as a json when successful
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.log(error);

        // if there is an error, return a 500 status code
        return new NextResponse('Database Error', { status: 500 });
    }
}

//create a new post

export const POST = async (req) => {

    const { title, description, img, content, username } = await req.json();
    console.log('title',title,' ',' description',description,' ','content',content)
    //console.log('before:', img);
    //Configuring Cloudinary
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });
    
    const uploadResult = await cloudinary.uploader.upload(img, {
        public_id: title
    }).catch((error) => console.log(error));
    console.log('after:', uploadResult?.secure_url);

    // Connect to mongo database
    await connectDB();
    try {
        const post = new Post({
            title,
            description,
            img: uploadResult?.secure_url,
            content,
            username,
        });

        await post.save();
        return new NextResponse(JSON.stringify(post), { status: 201 });
    } catch (error) {
        console.log(error);

        // if there is an error, return a 500 status code
        return new NextResponse('Database Error', { status: 500 });
    }
}