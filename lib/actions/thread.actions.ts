"use server" //if we dont put it we cant create database actions as it is in 
//browers, one reason is cors issue
import { revalidatePath } from "next/cache";
import Thread from "../models/thread.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}
export async function createThread({ text, author, communityId, path }: Params)
{
    try {
        connectToDB()
        const createThread=await Thread.create({
            text,
            author,
            community:null
        });// here the Thread is a mongo model
    
        //updating the user model
        await User.findByIdAndUpdate(author,
            {
                $push:{threads:createThread._id}
            })
    
            revalidatePath(path)
    } catch (error:any) {
        throw new Error(`error creating thread: ${error.message}`)
    }
   
}
