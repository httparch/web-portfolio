import { clientId,clientSecret } from "./data.js";

export const _PostMessage = async (dataForm) => {

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataForm,
      }) 

    return response;
}

export const _SpotifyGetAccessToken = async () => {
    const clientId = localStorage.getItem("client_id") || 'ba722d4cbbd247f5ae134e12c458e8eb';
    const clientSecret = localStorage.getItem("client_secret") || 'd817e47cf88c49adb86bfd1333fdf0a9';
    const redirectUri = 'http://localhost:5173/'; // Must match the one registered in Spotify

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (!code) {
        console.warn("No code found in URL.");
        return;
    }
    window.history.replaceState({}, document.title, "/");
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirectUri
            }).toString()
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Token fetch error:", errorText);
            alert("Failed to fetch access token.");
            console.log("Code:", code);
            console.log("client_id:", clientId);
            console.log("client_secret:", clientSecret);
            console.log("redirect_uri:", redirectUri);
            return;
        }

        const data = await response.json();
        console.log("Token response:", data);

        if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
        }
        if (data.refresh_token) {
            localStorage.setItem("refresh_token", data.refresh_token);
        }

        return data.access_token;

    } catch (error) {
        console.error("Fetch error:", error);
        alert("Something went wrong while fetching token.");
    }
}

export const _GetRecentTrack = async (token) => {

    try {
        const response = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Spotify API error:", response.status, errorText);
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("TC_CONTROLLER:", error);
    }
}

//const data = await _SpotifyGetAccessToken();
//const recentTrack = await _GetRecentTrack(data);

//console.log(data);
//console.log(recentTrack);
