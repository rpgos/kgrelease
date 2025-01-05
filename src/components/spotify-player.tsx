'use client'

import { getAlbums } from '@/actions/get-albums'
import { Link } from '@nextui-org/react'
import { Album } from '@prisma/client'
import React, { useEffect, useState } from 'react'

export default function SpotifyPlayer() {
  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] = useState<Album[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await getAlbums()
      setAlbums(albums)
      setLoading(false)
    }

    setLoading(true)
    fetchAlbums()
  }, [])

  const getAnotherAlbum = (): void => {
    const nextIndex = currentIndex + 1
    if(nextIndex < albums.length) {
      setCurrentIndex(nextIndex)
      return
    }

    setCurrentIndex(0)
  }

  return (
    <>
      {
        loading ?
        <div className="justify-center items-center text-white animate-pulse flex h-full">
          <h1 className="text-amber-400">Loading...</h1>
        </div>
        :
        <>
          <iframe
            src={`https://open.spotify.com/embed/album/${albums[currentIndex]?.spotifyId}`}
            width="326"
            height="432"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <Link
            className="text-amber-400 mt-2"
            onPress={getAnotherAlbum}
            href="#"
            underline="always"
          >
            Another album
          </Link>
        </>

      }
    </>
  )
}
