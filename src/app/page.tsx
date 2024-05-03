import { fetchAlbums } from "@/utils/api";


export default async function Home() {
  const albums = await fetchAlbums()
  
  const lastReleaseDate = albums.items[0].release_date

  return (
    <div>Last release on {lastReleaseDate}</div>
  );
}
