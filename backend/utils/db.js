import mongoose from "mongoose";

const connectDb = async()=>{
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongoDb is conected successfull")
    
} catch (error) {
    console.log("mongodb not conected")
    console.log(error)
}


}

export default connectDb