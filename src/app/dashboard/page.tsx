import AlbumPopover from "@/components/album-popover";
import { davidaFont } from "@/app/fonts";

export default function DashboardPage() {

  return (
    <div className="text-white h-full w-[755px] bg-zinc-800 p-4">
      <h1 className={`${davidaFont.className} text-4xl p-6`}>Back Stage</h1>
      <AlbumPopover />
    </div>
  )
}
