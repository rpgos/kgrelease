'use server'

import { auth } from "@/auth";
import { prisma } from "@/db";

interface CreateAlbumFormState {
  errors: {
    link?: string[],
    _form?: string[]
  }
}

export async function createAlbum(formState: CreateAlbumFormState, formData: FormData): Promise<CreateAlbumFormState> {
  const session = await auth()

  if(!session || !session.user) {
    return { errors: { _form: ['You must be signed in to do this.'] } }
  }

  const link = formData.get('link') as string;

  try {
    const album = await prisma.album.create({
      data: {
        link,
      }
    });

    console.log("Album created: ", album)

  } catch (error) {
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