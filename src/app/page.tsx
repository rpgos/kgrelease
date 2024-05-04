import { fetchAlbums } from "@/utils/api";
import { notFound } from "next/navigation";
import { SpotifyAlbum } from "@/@types/spotifyAlbum";
import Image from "next/image";

export default async function Home() {
  try {
    const albums = await fetchAlbums()
    const lastReleaseDate = albums[0].release_date
    const lastReleaseImg = albums[0].images[0].url
    
    return (
      <div>
        Last release on {lastReleaseDate}
        <Image src={lastReleaseImg} alt="album cover" width={parseInt(albums[0].images[0].width)} height={parseInt(albums[0].images[0].height)} />
      </div>
    );
  } catch(error) {
    return notFound()
  }
}
