import express from "express";

const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({success : false, status : "Server running"})
})


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on por t : ${PORT}`);
    
})