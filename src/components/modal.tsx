'use client'

// import { OnApproveBraintreeActions, OnApproveBraintreeData, PayPalButtons, PayPalCardFieldCardFieldData, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";


export default function Modal() {
  // const [paypalSuccess, setPaypalSuccess] = useState(false)
  const [album, setAlbum] = useState('')
  const [loading, setLoading] = useState(false)
  // const albumRef = useRef(album)
  const router = useRouter()

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
    // albumRef.current = event.target.value
    setAlbum(event.target.value)
  }

  const sendAlbum = async () => {
    setLoading(true)
    const response = await fetch('/api/albums', { method: 'POST', body: new URLSearchParams({ albumLink: album }) })
    const { message, success } = await response.json()
    
    if (success) {
      toast.success(message)
      router.push('/recommendations')
    } else {
      toast.error(message)
    }

    setLoading(false)
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
            onChange={handleChange}
          />
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
          

          <div className="flex justify-center items-center gap-3">
            <Link href="/recommendations" className="text-amber-400 border-amber-400 focus:text-black hover:text-black focus:bg-amber-400 hover:bg-amber-400 border p-4 rounded-full font-mono">
              {
                'Nope'
              }
            </Link>

            <button className="text-black bg-amber-400 focus:bg-amber-200 hover:bg-amber-200 p-4 rounded-full font-mono" onClick={sendAlbum} disabled={loading}>
              {
                loading ? 
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                :
                'Send'
              }
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}
