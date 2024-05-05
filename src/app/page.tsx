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
          <div className="w-full h-full bg-black flex flex-col content-center justify-evenly items-center rounded relative">
            <h1 className={`${myFont.className} text-4xl text-amber-400`}>How long has it been?</h1>
            <div className="flex flex-col rounded bg-amber-200 p-2 font-mono justify-evenly gap-2 z-20">
              <h2 className="text-2xl">{Math.floor(timePassed / (1000 * 60 * 60 * 24))} days since</h2>
              <Image className="rounded" src={lastAlbum.images[0].url} alt="album cover" width={310} height={310} />
              <div className="flex flex-col">
                <span className="font-bold">{lastAlbum.name}</span>
                <span className="font-light">{lastAlbum.release_date}</span>
              </div>
            </div>
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpubG9xZTVxeDluaTl6Z2s3YTJ6eG1veDIxNG42aTc4N3V1eHRxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kc6BdWsEeIBevFPS2T/giphy.gif"
              className="absolute animate-cross-screen z-10"
              width={130}
            />
            <Image
              src="/icon.png"
              className="absolute animate-spin-slow z-0 left-[15vw]"
              width={130}
              height={130}
              alt="Nonagon"
            />
            <Image
              src="/icon.png"
              className="absolute animate-spin-slow-reverse z-0 right-[15vw]"
              width={130}
              height={130}
              alt="Nonagon"
            />
          </div>
        </main>
      </div>
    );
  } catch(error) {
    return notFound()
  }
}
