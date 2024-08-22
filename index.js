import express from "express";
import 'dotenv/config';
import connectDB from "./DB/connectDB.js";
import User from "./models/user.model.js";
import userRouter from "./router/user.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user", userRouter);

app.get('/', (req,res)=>{
    res.status(200).json({success : true, status : "Server running"})
})

app.post("/register", async (req, res) => {
    const { name } = req.body;
    console.log(name);

    const user = await User.create({
        name: "admin",
        email: "admin@gmail.com",
        password: "123"
    })

    const admin = await User.find({ name: "admin" })
    console.log("Searched: ", admin);

    // res.status(200).json({ user });
})


const PORT = process.env.PORT;

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running on port : ${PORT}`);
        
    })
})