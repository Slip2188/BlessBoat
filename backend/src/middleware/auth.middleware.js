import jwt from "jsonwebtoken";
import User from "../models/User.js";

// We get the follwoing from the frontend, on which the protectRoute function is based
// const response = await fetch(`http://localhost:3000/api/entry`, {
//     method: "POST",
//     body: JSON.stringify({
//         title
//     }),
//     headers: {Authorisation: `Bearer ${token}`}
// });

const protectRoute = async (req, res, next) => {
    try {
        // get the user's token
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(401).json({message:"No token, access denied"});
        const token = authHeader.split(" ")[1]; 

        
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // Find user
        const user = await User.findById(decoded.userID).select("-password") // Selects all feilds except the password
        if (!user) {
            return res.status(401).json({message: "Your token is invalid"})
        }

        req.user = user; // sets the user to the user found so that all attributes of the user can be accessed in the next function i.e router.post('/',...) in journalRoutes.js
        next(); // calls the next function (i.e. the async function in entryRoutes.js)

    } catch (error) {
        console.log("Authentication Error: ", error.message)
        res.status(500).json({message: "Token is not valid"})
    }
}

export default protectRoute;