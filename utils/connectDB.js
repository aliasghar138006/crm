import mongoose from "mongoose";
export default async function Connect(){
    try {
        if(mongoose.connections[0].readyState) return;
        await mongoose.connect(process.env.URI);
        console.log("Connected To DB");
    } catch (error) {
        console.log(error);
    }
}


