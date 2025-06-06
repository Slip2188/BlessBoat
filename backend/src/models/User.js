import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: true,
            unique: false,
        },
        email : {
            type: String,
            requied: true, 
            unique: true,
        },
        password : {
            type: String,
            requied: true, 
            minlength: 6,
        }
    }, 
    {
        timestamps: true
    }
); 

// Encrypting the password before saving it using a pre-hook
userSchema.pre("save", async function (next){
    // if password is not being modified no need to encrypt the password
    if (!this.isModified("password")) return next();
    // Else encrypt the password
    const salt = await bcrypt.genSalt(10); //  10 signifies kitna encrypt karnae
    this.password = await bcrypt.hash(this.password, salt); // this refers to the current object while saving it in the database
    next()
} );

userSchema.methods.comparePassword = async function (userPassword) {
    return await bcrypt.compare(userPassword, this.password);
}

const User = mongoose.model("User", userSchema); // Mongodb actually stores this as users

export default User;