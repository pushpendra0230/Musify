// import axios from 'axios';

// const getToken = async () => {
//     const clientId = 'YOUR_SPOTIFY_CLIENT_ID';
//     const clientSecret = 'YOUR_SPOTIFY_CLIENT_SECRET';

//     const response = await axios.post(
//         'https://accounts.spotify.com/api/token',
//         'grant_type=client_credentials',
//         {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
//             },
//         }
//     );

//     return response.data.access_token;
// };

// export default getToken;