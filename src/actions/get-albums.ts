'use server'

import { prisma } from "@/db"
import { cache } from "react"

export const getAlbums = cache(async () => {
  const albums = await prisma.album.findMany({
    include: {
      artist: true
    }
  })

  return albums.sort(() => Math.random() - 0.5)
})
