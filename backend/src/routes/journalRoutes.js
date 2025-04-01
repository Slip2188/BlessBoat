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

router.post("/", protectRoute, async (req, res) => {
    // All this is assuming that the request will have the current journal in it for us to access 
    try {
        const {journal, title, entryBody} = req.body;
        if (!journal) {
            return res.status(400).json({message: "Select journal to write entry in!"});
        }
        if (!title || !entryBody) {
            return res.status(400).json({message: "Write something in your entry!"});
        }

        const currentJournal = await Journal.findById(journal._id) // Selects all feilds except the password
        if (!currentJournal) {
            return res.status(400).json({message: "Journal not found!"});
        }
        
        // START FROM HERE (ADD THE NEW ENTRY TO THE JOURNAL)

    } catch (error) {
        console.log("Error creating journal", error.message)
        res.status(500).json({message:error.message})
    }
});

export default router;