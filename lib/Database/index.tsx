// 9FlP0h1vpT0MvQML

import { error } from "console";
import mongoose from "mongoose";
import { cache } from "react";

const MONGODB_URI = process.env.MONGODB_URI;

let cached =(global as any).mongoose || {conn:null,Promise:null};

export const connetDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error("uri not found");

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
        bufferCommands:false,
        dbName:'eventee'
    })

    cached.conn=await cached.promise;

    return cached.conn;
}