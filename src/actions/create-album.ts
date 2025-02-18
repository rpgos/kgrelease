'use server'

import { prisma } from "@/db";
import { fetchAlbumFromLink } from "@/utils/api";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { z } from "zod"

interface CreateAlbumFormState {
  success?: boolean
  errors: {
    link?: string[],
    _form?: string[]
  }
}

const createAlbumSchema = z.object({
  link: z.string()
          .regex(/https:\/\/open\.spotify\.com\/album\/[a-zA-Z0-9]+/,
            { message: 'Must be a valid Spotify album link' }
          )
})

// https://open.spotify.com/album/7GByk3zU16geQvds0ZkFSe?si=RO0mtfvQRnO-vCiyQByN9A

export async function createAlbum(formState: CreateAlbumFormState, formData: FormData): Promise<CreateAlbumFormState> {
  const res = createAlbumSchema.safeParse({ link: formData.get('link') });
  
  if(!res.success) {
    return {
      errors: res.error.flatten().fieldErrors
    }
  }

  
  try {
    const spotifyAlbum = await fetchAlbumFromLink(res.data.link)
    const album = await prisma.album.create({
      data: {
        link: res.data.link,
        name: spotifyAlbum.name,
        spotifyId: spotifyAlbum.id,
        artist: {
          connectOrCreate: {
            where: { spotifyId: spotifyAlbum.artists[0].id },
            create: {
              name: spotifyAlbum.artists[0].name,
              spotifyId: spotifyAlbum.artists[0].id
            }
          }
        }
      }
    });

    console.log("Album created: ", album)
  } catch (error) {
    if(error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return { errors: { _form: ['Album already exists.'] } }
      }
      return { errors: { _form: ['Problem creating the album. Please try again later'] } }
    }

    if(error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      }
    }
  }

  return { success: true,  errors: {} }
}
