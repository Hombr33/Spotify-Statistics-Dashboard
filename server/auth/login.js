
import fetch from 'node-fetch';
import express from "express";
import querystring from "querystring";

const router = express.Router();
const redirect_uri = 'https://reddit-statistics-app.vercel.app/callback'; //redirect URI here.

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;

router.get("/", (req, res) => {

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

    request.post(authOptions, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        console.error("Spotify token error:", error || body);
        return res.redirect("https://reddit-statistics-app.vercel.app/?error=token_error");
      }

      console.log("Spotify tokens:", body);
      res.redirect("https://reddit-statistics-app.vercel.app/dashboard");
    });
  }
});

export default router;
