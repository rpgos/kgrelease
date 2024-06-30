import { notFound } from "next/navigation";
import { davidaFont } from "../fonts";
import Link from "next/link";
import SpotifyPlayer from "@/components/spotify-player";
import Modal from "@/components/modal";

interface SearchParamProps {
  searchParams: Record<string, string> | null | undefined
}

export default async function RecommendationsPage({ searchParams }: SearchParamProps) {
  const show = searchParams?.join

  try {
    return (
      <div className="flex flex-col justify-around h-full items-center pb-[50px]">
        <h1 className={`${davidaFont.className} text-4xl text-amber-400`}>Listen to something else in the meantime</h1>
        <div className="z-20 flex flex-col items-center">
          <SpotifyPlayer />
        </div>
        <div className="flex gap-4">
          <Link href="/" className="text-amber-400 border-amber-400 focus:text-black hover:text-black focus:bg-amber-400 hover:bg-amber-400 border p-4 rounded-full font-mono">
            Back
          </Link>
          <Link href="/recommendations?join=true" className="text-black bg-amber-400 focus:bg-amber-200 hover:bg-amber-200 p-4 rounded-full font-mono">
            Want your album here?
          </Link>
        </div>
        {show && <Modal />}
      </div>
    );
  } catch(error) {
    return notFound()
  }
}
