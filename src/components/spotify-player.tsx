'use client'

import { getAlbums } from '@/actions/get-albums'
import { getRandomAlbum } from '@/utils/getRandomAlbum'
import { Album } from '@prisma/client'
import React, { useEffect, useState } from 'react'

export default function SpotifyPlayer() {
  const [album, setAlbum] = useState('5LdJz37QiPZ1kFpIva1twi')
  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] = useState<Album[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // useEffect(() => {
  //   const fetchAlbums = async () => {
  //     const albums = await getAlbums()
  //     setAlbums(albums)
  //     setLoading(false)
  //   }

  //   fetchAlbums()
  // }, [])

  const getAnotherAlbum = (): void => {
    // const nextIndex = currentIndex + 1
    // if(nextIndex < albums.length) {
    //   setCurrentIndex(nextIndex)
    //   return
    // }

    // setCurrentIndex(0)
    let nextAlbum = getRandomAlbum()
    while(nextAlbum === album) {
      nextAlbum = getRandomAlbum()
    }

    setAlbum(nextAlbum)
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
            src={`https://open.spotify.com/embed/album/${album}`}
            width="326"
            height="432"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <button
            className="text-amber-400 mt-2 underline-offset-4 underline"
            onClick={getAnotherAlbum}
          >
            Another album
          </button>
        </>

      }
    </>
  )
}
