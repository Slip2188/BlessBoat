import mongoose from "mongoose";

const entrySchema = new mongoose.Schema(
    {
        title: {
            type: String, 
        },
        body: {
            type: String,
        },
        sentiment: {
            type: Number,
            min: 0,
            max: 1
        }
    },
    {
        timestamps: true
    }
)

const journalSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        name: {
            type: String, 
            required: true
        },
        entries: {
            type: [entrySchema]
        }
    }
)

const Journal = mongoose.model("Journal", journalSchema); 

export default Journal;
