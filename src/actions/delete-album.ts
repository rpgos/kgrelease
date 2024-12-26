'use server'

import { prisma } from "@/db"

export async function deleteAlbum({ id }: { id: number }) {
  try {
    const album = await prisma.album.delete({
      where: {
        id
      }
    })
  
    console.log("Album deleted: ", album)
  } catch(error) {
    if(error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      }
    }
  }

  return { errors: {} }
}
