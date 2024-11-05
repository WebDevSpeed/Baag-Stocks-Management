//  This file is used to crate and call restful API's

import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const createUser = async (req,res)=>{
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password){
           return res.status(400).json({success : false, message : "required fields"})
        }

        const isUserExist = await User.findOne({email : email});

        if(isUserExist){
           return res.status(400).json({success: false, message: "user already exits"});
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        console.log(encryptedPassword);
        

        const user = await User.create({name, email, password : encryptedPassword});

        if(!user){
           return res.status(400).json({success: false, message: "user already exits"});
        }

       return res.status(200).json({success: true, message: "user created"});


    } catch (error) {
        console.log(error);
       return res.status(400).json({success: false, message: "error while creating user"});
        
    }
}



export {createUser};