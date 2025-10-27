import express from "express";
import fetch from "node-fetch";

const username = "GapFiesty";
const url = `https://www.reddit.com/user/${username}/api/about.json`;

const router = express.Router();

router.get("/fetchAccounts", async (req, res) => {

    try {
        const response = await fetch(url, {
            headers: { "User-Agent": "reddit-dashboard-app/0.1 by GapFiesty" },
        });

        const data = response.json();
        res.json(data);

    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;