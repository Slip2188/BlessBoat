import express from "express";
import User from "../models/User.js";
import Journal from "../models/Journal.js";
import protectRoute from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protectRoute, async (req, res) => {
    try {
        const journalName = req.body;
        if (!journalName) {
            return res.status(400).json({message: "Name your journal!"});
        }

        const newJournal =  new Journal ({
            name: journalName,
            author: req.user._id
        });

        await newJournal.save()

        res.status(201).json(newJournal)
    } catch (error) {
        console.log("Error creating journal", error.message)
        res.status(500).json({message:error.message})
    }
});

router.post("/entry", protectRoute, async (req, res) => {
    // All this is assuming that the request will have the current journal in it for us to access 
    try {
        const {journalName, entryTitle, entryBody} = req.body;
        if (!journalName) {
            return res.status(400).json({message: "Select journal to write entry in!"});
        }
        if (!entryTitle || !entryBody) {
            return res.status(400).json({message: "Write something in your entry!"});
        }

        const currentJournal = await Journal.find({name: journalName, author: req.user._id}) 
        if (!currentJournal) {
            return res.status(400).json({message: "Journal not found!"});
        }
        
        // ADD THE NEW ENTRY TO THE JOURNAL (Error aaya to idhar hi aaega)
        sentiment = Math.floor(Math.random() * max) // Temp
        const newEntry = {
            title: entryTitle,
            body: entryBody,
            sentiment: sentiment
        }

        await Journal.updateOne(
            {
                _id: currentJournal._id
            },
            {
                $push: {entries: newEntry}
            }
        )

    } catch (error) {
        console.log("Error creating journal", error.message)
        res.status(500).json({message:error.message})
    }
});

router.get('/', protectRoute, async (req, res)=> {
    try {
        const journalName = req.body;
        
        if (!journalName) {
            return res.status(400).json({message: "Select journal to write entry in!"});
        }

        const currentJournal = await Journal.find({name: journalName, author: req.user._id})

        const entries = await Journal.find({_id: currentJournal._id}, 'entries')

        res.send(entries)

    } catch (error) {
        console.log("Error in fetching entries: ", error)
        res.status(500).json({message:"Internal Server Error"})
    }
})


export default router;