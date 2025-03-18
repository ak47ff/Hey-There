import mongooos from "mongoose";

export const connectDB = async () => {
    try{
        const conn = await mongooos.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected: ${conn.connectoin.host}');
    }catch (error){
        console.log("MongoDB connection error:", error)

    }
};