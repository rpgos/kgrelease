import { fetchAlbums } from "@/utils/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { davidaFont } from "../fonts";
import Link from "next/link";
import SpotifyPlayer from "@/components/spotify-player";

export default async function RecommendationsPage() {
  try {
    
    return (
      <div className="flex flex-col justify-around h-full items-center">
        <h1 className={`${davidaFont.className} text-4xl text-amber-400`}>How long has it been?</h1>
        <div className="z-20 flex flex-col items-center">
          <SpotifyPlayer />
        </div>
        <Link href="/" className="text-amber-400 border-amber-400 focus:text-black hover:text-black focus:bg-amber-400 hover:bg-amber-400 border p-4 rounded-full font-mono">
          Back
        </Link>
      </div>
    );
  } catch(error) {
    return notFound()
  }
}
