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
            console.error("CONTROLLER:", await response.text());
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
            headers: {'Authorization' :  'Bearer ' + token}
        })
        
        if(!response.ok){
            console.error("CONTROLLER:", await response.text());
        }
        
        
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error("TC_CONTROLLER: ", error)
    }
}