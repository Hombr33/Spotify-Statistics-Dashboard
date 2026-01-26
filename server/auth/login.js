
import fetch from 'node-fetch';
import express from "express";
import querystring from "querystring";

const router = express.Router();
const redirect_uri = 'https://reddit-statistics-app.vercel.app/callback'; //redirect URI here.

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;

router.get("/", (req, res) => {
  const scope = 'user-read-private%20user-read-email';
  const state = Math.random().toString(36).substring(2);

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
      show_dialog: true
    }));
});

router.get("/callback", async (req, res) => {

  var code = req.query.code || null;

  if (!code) {
    return res.redirect('https://reddit-statistics-app.vercel.app/login?error=no_code');
  }

  try {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
      },
      body: querystring.stringify({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      })
    });

    const data = await tokenResponse.json();

    if (data.access_token) {
      res.redirect(`https://reddit-statistics-app.vercel.app/callback?access_token=${data.access_token}`);
    } else {
      res.redirect('https://reddit-statistics-app.vercel.app/login?error=token_failed');
    }
  } catch (error) {
    console.error(error);
    res.redirect('https://reddit-statistics-app.vercel.app/login?error=server_error');
  }

});

export default router;
