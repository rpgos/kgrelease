interface AlbumListProps {
  children: React.ReactNode
}

export default function AlbumList({ children }: AlbumListProps) {
  return (
    <section className="flex flex-col gap-4 w-full p-4 items-center">
      <h2 className="text-2xl">Album List</h2>
      {children}
    </section>
  )
}
