//   This file to build connection between server and database(local host)

import mongoose from "mongoose";


//   Mongoose.connect will connect to the url stored in env.DB_URL            
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