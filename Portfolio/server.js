/*
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

const clientId = 'ba722d4cbbd247f5ae134e12c458e8eb';
const clientSecret = 'd817e47cf88c49adb86bfd1333fdf0a9';
const refreshToken = 'AQDb9BHz02sKysMvZo57tnK7_t6_hyPNZ2N3qbY5CvE4kOtwft_IB10-3YJqQS1OBVyy2Y-BCrgGU9j7JOXLpaH-uMtbod0lzzQdd1JY1rn9EWPVcSAGeF4wCEGiL-bNm1I'; // Get this once manually from auth flow

let accessToken = null;
let accessTokenExpiry = 0;

async function refreshAccessToken() {
  const now = Date.now();
  if (accessToken && now < accessTokenExpiry) {
    // Token still valid
    return accessToken;
  }
  
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  });

  const data = await response.json();
  accessToken = data.access_token;
  accessTokenExpiry = now + (data.expires_in * 1000) - 60000; // refresh 1 min early

  return accessToken;
}

app.get('/api/my-recent-tracks', async (req, res) => {
  try {
    const token = await refreshAccessToken();

    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).send(errorText);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Spotify backend listening at http://localhost:${port}`);
});*/