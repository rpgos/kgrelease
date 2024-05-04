import { SpotifyAlbum } from "@/@types/spotifyAlbum";

async function getToken(): Promise<string> {
  const client_id = process.env.SPOTIFY_CLIENT_ID; 
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  // token valid for one hour
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
    next: { revalidate: 86_400 }, // one day
  });

  const res = await response.json()

  return res.access_token;
}

export async function fetchAlbums(): Promise<SpotifyAlbum[]> {
  try {
    const accessToken = await getToken()
    const response = await fetch("https://api.spotify.com/v1/artists/6XYvaoDGE0VmRt83Jss9Sn/albums?limit=5", {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + accessToken },
      next: { revalidate: 86_400 } // one day
    });
  
    const res = await response.json()

    return res.items
  } catch(error) {
    console.error('Error fetching albums:', error);
    throw new Error('Could not get albums');
  }
}
