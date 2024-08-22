import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        unique : true,
        require :true
    },
    password : {
        type : String,
        require : true,
    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
