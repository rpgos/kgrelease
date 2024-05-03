import { fetchAlbums } from "@/utils/api";
import { notFound } from "next/navigation";


export default async function Home() {
  try {
    const albums = await fetchAlbums()
    
    const lastReleaseDate = albums.items[0].release_date
    
    return (
      <div>Last release on {lastReleaseDate}</div>
    );
  } catch(error) {
    return notFound()
  }
}
