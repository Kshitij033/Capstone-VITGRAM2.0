import mongoose from "mongoose";

const threadSchema =new mongoose.Schema({
 text:{
    type:String,
    required:true
 },
 author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
 },
 community:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Community"
 },
 createdAt:{
    type:Date,
    default:Date.now
 },
 parentId:{
    type:String
 },
 children:[ //recursion 
 // as a comment it self can have a comment
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Thread"
    }
 ]
});

const Thread =mongoose.models.Thread || mongoose.model("Thread",threadSchema)
//the first time the mongose.models.user doesnt exist so it create using the second option
//but after that it using the instance of the first 
export default Thread