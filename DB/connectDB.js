import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB is connected to : ", con.connection.host);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

export default connectDB;