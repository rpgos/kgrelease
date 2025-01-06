'use server'

import { prisma } from "@/db"
import { cache } from "react"

export const getAlbums = cache(async () => {
  const albums = await prisma.album.findMany({
    include: {
      artist: true
    }
  })

  const precious = albums.find(album => album.artist.name === 'Al-Mudawwar')
  const array = precious ? [precious] : []

  return array.concat(albums.sort(() => Math.random() - 0.5))
})
