import mongoose from 'mongoose'

let isConnected=false // variable to check whether it is connected

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true) // prevent unknown queries
    if(!process.env.MONGODB_URL)return console.log('the mongo connection is not clapped')
    if(isConnected) return console.log("already connected")
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        isConnected=true
        console.log("mongodb is connected ")
    } catch (error) {
        console.log(error)
    }
}