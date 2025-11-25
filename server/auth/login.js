
import express from "express";
import querystring from "querystring";

const router = express.Router();

router.get("/", (req, res) => {

    // client info
    const clientSecret = process.env.CLIENT_SECRET;
    const clientId = process.env.CLIENT_ID;

    var redirect_uri = 'https://redirectURIHere'; //redirect URI here.
    var scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: clientId,
            scope: scope,
            redirect_uri: redirect_uri,
        }));
});

router.get("/callback", (req, res) => {
  res.send("Spotify redirected you! Code: " + req.query.code);
});

export default router;