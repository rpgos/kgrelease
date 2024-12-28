export interface SpotifyAlbum {
  id: string
  name: string
  release_date: string
  images: {
    url: string
    height: string
    width: string
  }[]
  artists: {
    id: string
    name: string
  }[]
}
