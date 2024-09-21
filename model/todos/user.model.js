import mongoose from "mongoose";
const mongoose = require("mongoose");

const UserScehema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:8,
        maxlength:12,

    }
},{
    timestamps:true,
});



export const User = mongoose.model("User", UserScehema);
//users
