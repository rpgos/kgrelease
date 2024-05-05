import { fetchAlbums } from "@/utils/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { davidaFont } from "../fonts";
import Link from "next/link";
import SpotifyPlayer from "@/components/spotify-player";

export default async function RecommendationsPage() {
  try {
    
    return (
      <>
        <h1 className={`${davidaFont.className} text-4xl text-amber-400`}>Listen to something else in the meantime</h1>
        <div className="z-20">
          <SpotifyPlayer />
        </div>
        <Link href="/" className="text-amber-400 border-amber-400 focus:text-black hover:text-black focus:bg-amber-400 hover:bg-amber-400 border p-4 rounded-full font-mono">
          Back
        </Link>
      </>
    );
  } catch(error) {
    return notFound()
  }
}
