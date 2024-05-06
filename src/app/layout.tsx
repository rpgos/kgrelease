import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "King Gizzard's Last Release",
  description: "How long has been since King Gizzard & the Lizard Wizard released an album?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full text-center`}>
        <main role="main" className="w-full p-1 h-screen bg-amber-400">
          <div className="w-full h-full bg-black flex flex-col content-center justify-evenly items-center rounded relative">
            {children}
            <Image
              src="/icon.png"
              className="absolute animate-spin-slow z-0 left-[15vw]"
              width={130}
              height={130}
              alt="Nonagon"
            />
            <Image
              src="/icon.png"
              className="absolute animate-spin-slow-reverse z-0 right-[15vw]"
              width={130}
              height={130}
              alt="Nonagon"
            />
            <Analytics />
          </div>
        </main>
      </body>
    </html>
  );
}
