import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Token is basically cache so that the user doesnt have to sign in every day
const generateToken = (userID) => {
    return jwt.sign({userID}, process.nextTick.JWT_SECRET, {expiresIn:"15d"})
}

router.post("/register", async(req, res) => {
    try {
        const {username, email, password} = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({message: "All Fields required!"});
        } else if (password.length<6) {
            return res.status(400).json({message: "Password should be more than 6 characters!"});
        } 

        // Check if user already exists
        const userExists = await User.findOne({$or:[{email:email}]})
        if (userExists) {
            return res.status(400).json({message: "This User already exists"});
        } 

        const user = new user ({username, email, password})
        await user.save()

        const token = generateToken(user._id)
        res.status(201).json({token, user:{_id: user._id, username: user._username, email: user.email}})

    } catch (error) {
        console.log("Error in the registeration route", error);
        res.status(500).json({message:"Internal Server Error"});
    }
});

router.post("/login", async(req, res) => {
    res.send("login");
});

export default router;