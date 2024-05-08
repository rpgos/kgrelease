import client from "@/utils/paypal"
import { NextRequest, NextResponse } from "next/server";
const paypal = require('@paypal/checkout-server-sdk')

export async function POST(req: NextRequest) {
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
            value: '2.00',
          },
        },
      ],
    })
    const response = await paypalClient.execute(request)
    if (response.statusCode !== 201) {
      console.log("PAYPAL RESPONSE: ", response)
      return new NextResponse("Paypal Error trying to create order", { status: 500 })
    }

    // Create order in DB

    return NextResponse.json({ message: 'Order created on Paypal', success: true, data: { order: response.result } })
  } 
  catch(err){
    console.log("Err at Create Order: ", err)
    return NextResponse.json({ message: 'Could not create Paypal order', success: false }, { status: 500 })
  }

}
