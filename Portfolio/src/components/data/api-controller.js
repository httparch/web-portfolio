import { clientId,clientSecret } from "./data.js";

export const _PostMessage = async (dataForm) => {

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataForm,
      }) 

    return response;
}

export const _SpotifyGetAccessToken = async () => {

    try {
        const response = await fetch("https://accounts.spotify.com/api/token",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        })
        
        if(!response.ok){
            const errorText = await response.text();
            console.error("CONTROLLER:", errorText);
            return; 
        }
        
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("TC_CONTROLLER: " , error)
    }

}


export const _GetRecentTrack = async (token) => {

    try {
        const response = await fetch("https://api.spotify.com/v1/me/player/recently-played",{
            headers: {'Authorization':'Bearer ' + token}
        })
        
        
        if(!response.ok){
            const errorText = await response.text();
            console.error("CONTROLLER:", errorText);
            return; 
        }
        
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("TC_CONTROLLER: ", error)
    }
}

//https://accounts.spotify.com/authorize?client_id=ba722d4cbbd247f5ae134e12c458e8eb&response_type=code&redirect_uri=https%3A%2F%2Fgithub.com%2Fhttparch%0A&scope=user-read-recently-played

