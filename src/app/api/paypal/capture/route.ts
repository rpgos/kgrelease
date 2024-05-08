import client from "@/utils/paypal"
import { NextRequest, NextResponse } from "next/server";
const paypal = require('@paypal/checkout-server-sdk')

export async function POST(req: NextRequest) {
  // const body = await req.formData();

  // if(!body.get('order_price')) {
  //   return NextResponse.json({ message: 'Please Provide order_price', success: false }, { status: 400 })
  // }

  try{
    const PaypalClient = client()
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
    const response = await PaypalClient.execute(request)
    if (response.statusCode !== 201) {
      console.log("PAYPAL RESPONSE: ", response)
      return new NextResponse("Paypal Error trying to execute order", { status: 500 })
    }

    // Your Custom Code for doing something with order
    // Usually Store an order in the database like MongoDB

    return NextResponse.json({ message: 'Paid successfuly!', success: true, data: { order: response.result } })
  } 
  catch(err){
    console.log("Err at Create Order: ", err)
    return NextResponse.json({ message: 'Could not create Paypal order', success: false }, { status: 500 })
  }

}
