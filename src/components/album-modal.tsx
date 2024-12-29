'use client'

import { createAlbum } from "@/actions/create-album";
import {
  Button,
  Form,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  Input,
 } from "@nextui-org/react";
// import { OnApproveBraintreeActions, OnApproveBraintreeData, PayPalButtons, PayPalCardFieldCardFieldData, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ChangeEvent, useActionState, useState } from "react";
import { toast } from "react-toastify";

export default function AlbumModal() {
  // const [paypalSuccess, setPaypalSuccess] = useState(false)
  const [album, setAlbum] = useState('')
  // const albumRef = useRef(album)
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const [formState, action, isPending] = useActionState(createAlbum, { success: false, errors: {} });

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

  if(formState.success) {
    onClose()
    formState.success = false
    toast("Album added")
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // albumRef.current = event.target.value
    setAlbum(event.target.value)
  }

  return (
    <>
      <Button onPress={onOpen} className="h-[58px] text-black bg-amber-400 focus:bg-amber-200 hover:bg-amber-200 p-4 rounded-full font-mono">
        Want your album here?
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent className="bg-black m-auto p-4 rounded max-w-[85vw]">
          <ModalBody>
            <Form action={action} className="flex flex-col items-center gap-8">
              <p className="text-amber-400 font-mono">
                You can add your album to the recommendations!<br/><br/>
                All you need to do is send the Spotify album link.
                We update the list weekly.
              </p>
              <Input
                className="rounded p-2 max-w-[450px]"
                type="text"
                placeholder="Spotify link"
                id="link"
                name="link"
                value={album}
                onChange={handleChange}
                isRequired
                isInvalid={!!formState.errors.link}
                errorMessage={formState.errors.link}
              />

              <div className="flex justify-center items-center gap-3">
                <Button className="text-amber-400 bg-black border-amber-400 focus:text-black hover:text-black focus:bg-amber-400 hover:bg-amber-400 border p-4 rounded-full font-mono" onPress={onClose}>
                  Nope
                </Button>
                <Button isLoading={isPending} type="submit" className="text-black bg-amber-400 focus:bg-amber-200 hover:bg-amber-200 p-4 rounded-full font-mono">
                  {'Send'}
                </Button>
              </div>
              {
                formState.errors._form &&
                <div className="rounded p-2 bg-red-200 border border-red-400">
                  {formState.errors._form.join(', ')}
                </div>
              }
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

  return (
    <dialog
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="bg-black m-auto p-4 rounded max-w-[85vw]">
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
      </div>
    </dialog>
  )
}
