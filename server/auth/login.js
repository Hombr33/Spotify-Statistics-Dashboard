
import express from "express";
import querystring from "querystring";

const router = express.Router();
const redirect_uri = 'https://reddit-statistics-app.vercel.app/callback'; //redirect URI here.

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;

router.get("/login", (req, res) => {

  // client info
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirect_uri,
    }));
});

// once user is accepted, they return to /callback. Auth tokens are collected and 
// then user is offically logged in. after that, we redirect them to the main
// dashboard, where the app will automatically get all data, then save to localstorage.

router.get("/callback", (req, res) => {

  var code = req.query.code || null;
  var state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {

    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
      },
      json: true
    };
  }

  res.send("Spotify redirected you! Code: " + req.query.code);

  console.log("redirected!")
  res.redirect("https://reddit-statistics-app.vercel.app/dashboard");
});

export default router;
