import User from "./user.model.js";
import bcrypt from "bcrypt";

const SignUp = async (req , res) => {
     try {
        const {name , email , password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message : "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password , 10);
        const newUser = new User({
            name,
            email,
            password : hashedPassword
        })
        await newUser.save();
        res.status(201).json({message : "User created successfully"});

     } catch (error) {
        res.status(500).json({message : "Internal server error"});
        console.log("Error in CreateUser: ", error);
     }
}


const Login = async (req , res) =>{
    try {
        const {email , password} = req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({message : "User not found"});
        }
        const isPasswordCorrect = await bcrypt.compare(password , existingUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message : "Invalid credentials"});
        }
        res.status(200).json({message : "Login successful"});
    } catch (error) {
        res.status(500).json({message : "Internal server error"});
        console.log("Error in Login: ", error);
    }
}

export default {SignUp , Login};

