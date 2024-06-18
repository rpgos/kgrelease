'use client'

import { OnApproveBraintreeActions, OnApproveBraintreeData, PayPalButtons, PayPalCardFieldCardFieldData, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import { toast } from "react-toastify";


export default function Modal() {
  // const [paypalSuccess, setPaypalSuccess] = useState(false)
  const [album, setAlbum] = useState('')
  const albumRef = useRef(album)

  // const paypalCreateOrder = async (): Promise<string> => {
  //   const response = await fetch('/api/paypal/create', { method: 'POST', body: new URLSearchParams({ album: albumRef.current }) })
  //   const { data, message, success } = await response.json()

  //   if(!success) {
  //     throw new Error(message)
  //   }

  //   return data.order.id
  // }

  // const paypalCaptureOrder = async (data: { orderID: string }, _actions: any) => {
  //   const response = await fetch('/api/paypal/capture', {
  //     method: 'POST',
  //     body: new URLSearchParams({
  //     'orderId': data.orderID,
  //     })
  //   })
  //   const { message, success }  = await response.json()

  //   if (success) {
  //     setPaypalSuccess(true)
  //     toast.success(message)
  //   } else {
  //     toast.error(message)
  //   }
  // }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    albumRef.current = event.target.value
    setAlbum(event.target.value)
  }

  return (
    <dialog
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="bg-black m-auto p-4 rounded max-w-[85vw]">
        <div className="flex flex-col items-center gap-8">
          <p className="text-amber-400 font-mono">
            You can add your album to the recommendations!<br/><br/>
            All you need to do is send the Spotify album link.
            We update the list weekly.
          </p>
          <input
                className="rounded p-2"
                type="text"
                placeholder="Spotify link or Album name"
                id="album"
                name="album"
                value={album}
                onChange={handleChange} />
          {/* {
            !paypalSuccess &&
            <PayPalScriptProvider
              options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
                currency: 'EUR',
                intent: 'capture',
              }}
            >
             
              <PayPalButtons 
                style={{
                  color: 'gold',
                  shape: 'pill',
                  label: 'pay',
                  height: 50,
                }}
                createOrder={paypalCreateOrder}
                onApprove={paypalCaptureOrder}
                onError={(err) => {
                  toast.error(err.message as string)
                }}
              />
            </PayPalScriptProvider>
          } */}
          
          <Link href="/recommendations" className="text-amber-400 border-amber-400 focus:text-black hover:text-black focus:bg-amber-400 hover:bg-amber-400 border p-4 rounded-full font-mono">
            {
              'Nope'
            }
          </Link>
        </div>
      </div>
    </dialog>
  )
}
