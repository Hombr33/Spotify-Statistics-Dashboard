import express from "express";
import fetch from "node-fetch";

const url = `https://api.spotify.com/v1/me`;

const router = express.Router();

router.get("/fetchAccounts", async (req, res) => {

    const authHeader = req.headers.authorization;
    // extract auth token from the header of frontend req
    if (!authHeader) return res.status(401).json({ error: "No auth token provided" });

    const authToken = authHeader.split(" ")[1];

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { Authorization: `Bearer ${authToken}` },
        });

        console.log("Token received by backend:", authToken);

        console.log("Status code from Spotify:", response.status);
        const text = await response.text();
        console.log("Raw response from Spotify:", text);

        try {
            const data = JSON.parse(text);
            res.json(data);
        } catch {
            res.status(500).send(text);
        }

    } catch (err) {
        res.status(500).json(err);
    }
});


export default router;