import AlbumPopover from "@/components/album-popover";
import { davidaFont } from "@/app/fonts";
import AlbumList from "@/components/album-list";

export default async function DashboardPage() {

  return (
    <div className="text-white h-full w-[755px] relative z-20 overflow-scroll gap-4 flex flex-col items-center">
      <h1 className={`${davidaFont.className} text-4xl p-6`}>Backstage</h1>
      <AlbumPopover />
      <AlbumList />
    </div>
  )
}
