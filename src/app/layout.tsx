import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Analytics } from '@vercel/analytics/react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { KofiFloatingButton } from "kofi-react-widget";
import { UIProvider } from "@/components/ui/provider";

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
            <UIProvider>
              {children}
            </UIProvider>
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
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpubG9xZTVxeDluaTl6Z2s3YTJ6eG1veDIxNG42aTc4N3V1eHRxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kc6BdWsEeIBevFPS2T/giphy.gif"
              className="absolute animate-cross-screen z-10"
              width={130}
            />

            <KofiFloatingButton username="rodribuilds" background="#fbbf24" textColor="#323842" text="Coffee?" />
            <ToastContainer theme="colored" />
            <Analytics />
          </div>
        </main>
      </body>
    </html>
  );
}
