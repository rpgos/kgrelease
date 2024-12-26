import AlbumPopover from "@/components/album-popover";
import { davidaFont } from "@/app/fonts";
import AlbumListItem from "@/components/album-list-item";
import AlbumList from "@/components/album-list";
import { getAlbums } from "@/actions/get-albums";

export default async function DashboardPage() {
  const albums = await getAlbums()

  return (
    <div className="text-white h-full w-[755px] relative z-20 overflow-scroll gap-4 flex flex-col items-center">
      <h1 className={`${davidaFont.className} text-4xl p-6`}>Backstage</h1>
      <AlbumPopover />
      <AlbumList>
        {
          albums.map((album) => (
            <AlbumListItem key={album.id} id={album.id} title={album.link} />
          ))
        }
      </AlbumList>
    </div>
  )
}
