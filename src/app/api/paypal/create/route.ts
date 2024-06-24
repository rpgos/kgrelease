import { prisma } from "@/db";
import client from "@/utils/paypal"
import { NextRequest, NextResponse } from "next/server";
const paypal = require('@paypal/checkout-server-sdk')

const ORDER_AMOUNT = 2

export async function POST(req: NextRequest) {
  const body = await req.formData();
  const album = body.get('album')

  if(!album) {
    return NextResponse.json({ message: 'We need an album first', success: false }, { status: 400 })
  }

  try{
    const paypalClient = client()
    //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
    const request = new paypal.orders.OrdersCreateRequest()
    request.headers['prefer'] = 'return=representation'
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: ORDER_AMOUNT,
          },
        },
      ],
    })
    const response = await paypalClient.execute(request)
    if (response.statusCode !== 201) {
      console.log("PAYPAL RESPONSE: ", response)
      return new NextResponse("Paypal Error trying to create order", { status: 500 })
    }

    await prisma.order.create({
      data: {
        paypalOrderId: response.result.id,
        amount: ORDER_AMOUNT,
        album: album as string,
      }
    })

    return NextResponse.json({ message: 'Order created on Paypal', success: true, data: { order: response.result } })
  } 
  catch(err){
    console.log("Err at Create Order: ", err)
    return NextResponse.json({ message: 'Could not create Paypal order', success: false }, { status: 500 })
  }

}
