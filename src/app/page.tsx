import { fetchAlbums } from "@/utils/api";
import Image from "next/image";
import { davidaFont } from "./fonts";
import Link from "next/link";
import Custom500 from "../pages/500";


export default async function Home() {
  try {
    const albums = await fetchAlbums()
    const lastAlbum = albums[0]
    
    const timePassed = Date.now() - Date.parse(lastAlbum.release_date)
    
    return (  
      <div className="flex flex-col justify-around h-full items-center">
        <h1 className={`${davidaFont.className} text-4xl text-amber-400`}>How long has it been?</h1>
        <div className="z-20">
          <div className="flex flex-col rounded bg-amber-200 p-2 font-mono justify-evenly gap-2">
            <h2 className="text-2xl font-bold">{Math.floor(timePassed / (1000 * 60 * 60 * 24))} days</h2>
            since
            <Image className="rounded" src={lastAlbum.images[0].url} alt="album cover" width={310} height={310} />
            <div className="flex flex-col">
              <span className="font-bold">{lastAlbum.name}</span>
              <span className="font-light">{lastAlbum.release_date}</span>
            </div>
          </div>
        </div>
        <Link href="/recommendations" className="text-amber-400 border-amber-400 focus:text-black hover:text-black focus:bg-amber-400 hover:bg-amber-400 border p-4 rounded-full font-mono">
          What else is out there?
        </Link>
      </div>
    );
  } catch(error) {
    return Custom500()
  }
}
