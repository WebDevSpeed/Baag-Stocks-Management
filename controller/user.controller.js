import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "required fields" });
    }

    const isUserExist = await User.findOne({ email: email });

    if (isUserExist) {
      return res
        .status(400)
        .json({ success: false, message: "user already exits" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    console.log(encryptedPassword);

    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user already exits" });
    }

    return res.status(200).json({ success: true, message: "user created" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, message: "error while creating user" });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email/password required!" });
    }

    const responce = await User.findOne({ email: email });
    if (!responce) {
      return res
        .status(400)
        .json({ success: false, message: "user not found..." });
    }

    const verifyPass = await bcrypt.compare(password, responce.password);

    if (!verifyPass) {
      return res
        .status(400)
        .json({ success: false, message: "incorrect password!" });
    }

    return res
      .status(200)
      .json({ success: true, message: "user login success", responce });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, messsage: "error while logging user..." });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Not updated" });
    }
    return res
      .status(200)
      .json({ success: true, message: "User Updated Successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, messsage: "error while updating user..." });
  }
};

export { createUser, logIn, updateUser };
