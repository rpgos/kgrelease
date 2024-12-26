'use client'

import { getAlbums } from "@/actions/get-albums";
import { useEffect, useState } from "react";
import { Album } from "@prisma/client";
import AlbumListItem from "@/components/album-list-item";
import { deleteAlbum } from "@/actions/delete-album";
import { toast } from "react-toastify";

export default function AlbumList() {
  const [albums, setAlbums] = useState<Album[]>([]);
  
  useEffect(() => {
    async function loadAlbums() {
      const fetchedAlbums = await getAlbums();
      setAlbums(fetchedAlbums);
    }
    loadAlbums();
  }, []);

  const handleDeleteAlbum = async (id: number) => {
    const res = await deleteAlbum({ id })
    
    if(!res.errors._form) {
      toast.success("Album deleted")
      setAlbums((prevAlbums) => prevAlbums.filter(album => album.id !== id));
    } else {
      toast.error(res.errors._form.join(", "))
    }
  };

  return (
    <section className="flex flex-col gap-4 w-full p-4 items-center">
      <h2 className="text-2xl">Album List</h2>
      {
        albums.map((album) => (
          <AlbumListItem key={album.id} id={album.id} title={album.link} handleDelete={handleDeleteAlbum} />
        ))
      }
    </section>
  )
}
