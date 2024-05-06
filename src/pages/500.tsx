import Link from "next/link";

export default function Custom500() {
  return (
    <div className="flex flex-col justify-around h-full items-center">
      <p className="text-amber-400 font-mono">Put on your 3D glasses to see the error that just happened.</p>
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTdqcDEzYnY2ZGx5aGt1cndkaHJ6enRsOXMycHUyN293bWN4NnV6bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs7SqTlGMDvopblC/giphy.gif"
        className=" z-20"
        width={430}
      />
      <Link href="/recommendations" className="text-amber-400 border-amber-400 focus:text-black hover:text-black focus:bg-amber-400 hover:bg-amber-400 border p-4 rounded-full font-mono">
        What else is out there?
      </Link>
    </div>
  )
}
