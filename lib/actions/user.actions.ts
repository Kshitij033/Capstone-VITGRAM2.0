"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose"

export async function updateUser(
    userId:string,
    username:string,
    name:string,
    bio:string,
    image:string,
    path:string
    ): Promise<void>{
    connectToDB();
  try {
      await User.findOneAndUpdate(
          {id:userId}, //findone
          {
              username:username.toLowerCase(),
              name,
              bio,
              image,
              onboarded:true
          },
          {
              upsert:true //Upsert is that combines the words "update" and "insert".
          }
  
          )
      if(path ==='/profile/edit')
      {
          revalidatePath(path) //updating cache data
      }
  } catch (error:any) {
    throw new Error(`failed to craete/update user: ${error.message}`)
  }
}