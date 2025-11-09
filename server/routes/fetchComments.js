
import express from "express";
import fetch from "node-fetch";

const username = "GapFeisty";
const url = `https://www.reddit.com/user/${username}/comments.json`;

const router = express.Router();

router.get("/fetchComments", async (req, res) => {
    try {
        const response = await fetch(url, {
            headers: { "User-Agent": "reddit-dashboard-app/0.1 by GapFeisty" },
        });

        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch Reddit comments" });
    }
});

export default router;