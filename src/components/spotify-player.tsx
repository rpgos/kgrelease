'use client'

import { getRandomAlbum } from '@/utils/getRandomAlbum'
import React, { useState } from 'react'

export default function SpotifyPlayer() {
  const [album, setAlbum] = useState('5LdJz37QiPZ1kFpIva1twi')
  const [loading, setLoading] = useState(true)

  const getAnotherAlbum = (): void => {
    let nextAlbum = getRandomAlbum()
    while(nextAlbum === album) {
      nextAlbum = getRandomAlbum()
    }

    setAlbum(nextAlbum)
  }

  return (
    <>
      {
        loading &&
        <div className="justify-center items-center text-white animate-pulse flex h-full">
          <h1 className="text-amber-400">Loading...</h1>
        </div>
      }
      <iframe
        src={`https://open.spotify.com/embed/album/${album}`}
        width="326"
        height="432"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        onLoad={() => setLoading(false)}
      />
      {
        !loading &&
        <button
          className="text-amber-400 mt-2 underline-offset-4 underline"
          onClick={getAnotherAlbum}
        >
          Another album
        </button>
      }
    </>
  )
}
