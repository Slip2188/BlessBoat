import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database Connected ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting to database", error);
        process.exit(1); // exits with failure (exit(0) means it exits with success)
    };
};

export default connectDB;