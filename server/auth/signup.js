import express from "express";
import fetch from "node-fetch";

import bcrypt from 'bcrypt';

const router = express.Router();

router.post("/signup", async (req, res) => {

    try {
        const { userId, email, password } = req.body;
        const usersCollection = db.collection('Users');

        const existingUser = await usersCollection.findOne({ email });

        //check to see if user is already signed up.
        if (existingUser) {
            return res.status(400).json({ error: "user already exists" });
        }

        // now we need to implement logic to send email 
        // and password off to the Users collection in mongo.

        // hash password first
        const hashedPassword = await bcrypt.hash(password, 12);

        // new user
        const result = await usersCollection.insertOne({
            userId,
            email,
            hashedPassword,
            creationDate: new Date()
        });

        res.status(200).json( `User ${email} Signed up Successfully.`);
    
    } catch (error) {
        res.status(500).json({ error: "user failed to sign up " });
        console.log("user failed to sign up", error);
    }
});

export default router;