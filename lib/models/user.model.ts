import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    id:{ type:String, required:true},
    username:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    image:String,
    bio:String,
    threads:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Thread"
        }
    ],
    onboarded:{type:Boolean,default:false},
    communities:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Community"
        }
    ]
});

const User =mongoose.models.User || mongoose.model("User",userSchema)
//the first time the mongose.models.user doesnt exist so it create using the second option
//but after that it using the instance of the first 
export default User