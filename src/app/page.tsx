import { fetchAlbums } from "@/utils/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import localFont from '@next/font/local'

const myFont = localFont({ src: '../../public/fonts/DavidaRegular.otf' })

export default async function Home() {
  try {
    const albums = await fetchAlbums()
    const lastAlbum = albums[0]
    
    const timePassed = Date.now() - Date.parse(lastAlbum.release_date)
    
    return (
      <div className="w-full text-center">
        <main role="main" className="w-full p-1 h-screen bg-amber-400">
          <div className="w-full h-full bg-slate-800 flex flex-col content-center justify-evenly items-center rounded">
            <h1 className={`${myFont.className} text-4xl text-amber-400`}>How long has it been?</h1>
            <div className="flex flex-col rounded bg-blue-200 p-2 font-mono justify-evenly gap-2">
              <h2 className="text-2xl">{Math.floor(timePassed / (1000 * 60 * 60 * 24))} days since</h2>
              <Image className="rounded" src={lastAlbum.images[0].url} alt="album cover" width={310} height={310} />
              <div className="flex flex-col">
                <span className="font-bold">{lastAlbum.name}</span>
                <span className="font-light">{lastAlbum.release_date}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch(error) {
    return notFound()
  }
}
