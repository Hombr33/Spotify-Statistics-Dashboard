
import fetch from 'node-fetch';
import express from "express";
import querystring from "querystring";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

const redirect_uri = 'https://reddit-statistics-app.vercel.app/callback'; //redirect URI here.
const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;

router.get("/", (req, res) => {
  const scope = 'user-read-private%20user-read-email';
  const state = Math.random().toString(36).substring(2);

  // we're using a cookie to save the state for verification
  res.cookie('spotify_auth_state', state, {httpOnly: true, secure: true, sameSite: 'lax'});

  // Authorise the user
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

// user comes back, now they get redirected depending on outcome of authentication

router.get("/callback", async (req, res) => {

  const code = req.query.code || null;
  const state = req.query.state || null;

  const storedState = req.cookies ? req.cookies['spotify_auth_state'] : null;

  //varify the state

  if (!state || state !== storedState) {
    return res.redirect('https://reddit-statistics-app.vercel.app/login?error=state_mismatch');
  }

  //clear the cookie 

  res.clearCookie('spotify_auth_state');

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

    console.log("TOKEN RESPONSE:", data);

    if (data.error) {

      console.error('Spotify token error', data);
      return res.redirect('https://reddit-statistics-app.vercel.app/login?error=token_failed');
    }

    // store access and refresh tokens into cookies.

    res.cookie('spotify_access_token', data.access_token, {

      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: data.expires_in * 1000
    });

    res.cookie('spotify_refresh_token', data.refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    })

    // now we can get a profile !

    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: { 
        Authorization: `Bearer ${data.access_token}`,
      }
    })

    const userProfile = await response.json();
    console.log(userProfile);

    res.redirect('https://reddit-statistics-app.vercel.app/dashboard');


  } catch (error) {
    console.error(error);
    res.redirect('https://reddit-statistics-app.vercel.app/login?error=server_error');
  }

});

export default router;
