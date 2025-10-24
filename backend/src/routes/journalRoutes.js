import express from "express";
import Journal from "../models/Journal.js";
import protectRoute from "../middleware/auth.middleware.js";

const router = express.Router();

// Creates new journal
router.post("/", protectRoute, async (req, res) => {
    try {
        const {journalName} = req.body;
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
        res.status(401).json({message:error.message})
    }
});


// Gets all the journals
router.get('/', protectRoute, async (req, res)=> {
    try {
        const allJournals = await Journal.find({author: req.user._id}).sort({ updatedAt: -1 })
        // const totalJournals = await Journal.countDocuments({author: req.user._id}) 
        res.json(allJournals)
    } catch (error) {
        console.log("Error in fetching entries: ", error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

// Deletes a journal
router.delete("/:id", protectRoute, async (req, res)=>{
    try {
        const journal = await Journal.findById(req.params.id) // :/id and req.params.id is corelated i.e. if its :/hello then req.params.hello should be written
        if (!journal) return res.status (404).json({ message: "Book not found" });

        // Check if the journal is actually belonging to the user
        if (journal.author.toString() !== req.user._id.toString()) return res.status (404).json({ message: "Server error" });

        await journal.deleteOne()

        res.json({message:"Journal Deleted Successfully"})
    } catch (error) {
        
    }
})

/*

// Creates new entry in current journal 
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


// Gets all the entries of a journal
router.get('/', protectRoute, async (req, res)=> {

    // example call from react native - frontend
    // const response = await fetch ("http://localhost:3000/api/journal?page=1&limit=5");

    try {
        const journalName = req.body;

        // This is for pagination i.e. loading of the entries teen teen at a time, not evth at a time
        const page = req.query.page || 1;
        const limit = 3;
        const skip = (page-1)*limit; // Skips loading of first (n-1)*limit entries where n is the page number
        
        if (!journalName) {
            return res.status(400).json({message: "Select journal to write entry in!"});
        }

        const currentJournal = await Journal.find({name: journalName, author: req.user._id})

        const entries = await Journal.find({_id: currentJournal._id}, 'entries')
            .sort({createdAt:-1}) // Gives the entries in descending order
            .skip(skip)
            .limit(limit);
            //.populate("user", "username") -> used to access info about user who has created this journal. Not applicable here 

        const totalEntries = await Journal.find({_id: currentJournal._id}, 'entries').count() // yaha error aa saktae

        res.send({
            entries,
            currentPage: page,
            totalEntries,
            totalPages: Math.ceil(totalEntries/limit)
        })

    } catch (error) {
        console.log("Error in fetching entries: ", error)
        res.status(500).json({message:"Internal Server Error"})
    }
})


*/


export default router;