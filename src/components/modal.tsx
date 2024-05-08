'use client'

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Link from "next/link";
import { useState } from "react";


export default function Modal() {
  const [paypalSuccess, setPaypalSuccess] = useState(false)

  const paypalCreateOrder = async () => {
    try {
      const response = await fetch('/api/paypal/create', { method: 'POST' })
      const { data } = await response.json()
      
      return data.order.id
    } catch (err) {
      console.log(err)
      return ''
    }
  }

  const paypalCaptureOrder = async (orderId: string) => {
    const response = await fetch('/api/paypal/capture', {
      method: 'POST',
      body: new URLSearchParams({
      'orderId': orderId,
      })
    })
    const { data } = await response.json()

    return data
  }

  return (
    <dialog
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="bg-black m-auto p-4 rounded max-w-[85vw]">
        <div className="flex flex-col items-center gap-8">
          <p className="text-amber-400 font-mono">
            You can add your album to the recommendations for just 2€!<br/><br/>
            All you need to do is sending me either the Spotify link
            or the name of the band and album.
          </p>
          {
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
                  shape: 'rect',
                  label: 'pay',
                  height: 50
                }}
                createOrder={async (data, actions) => {
                  let order_id = await paypalCreateOrder()
                  return order_id
                }}
                onApprove={async (data, actions) => {
                  const { message, success } = await paypalCaptureOrder(data.orderID)
                  console.log(message)
                  if (success) {
                    setPaypalSuccess(false)
                  } else {
                    
                  }
                }}
              />
            </PayPalScriptProvider>
          }
          
          <Link href="/recommendations" className="text-amber-400 border-amber-400 focus:text-black hover:text-black focus:bg-amber-400 hover:bg-amber-400 border p-4 rounded-full font-mono">
            {
              paypalSuccess ? 'Thank you!' : 'Nope'
            }
          </Link>
        </div>
      </div>
    </dialog>
  )
}
