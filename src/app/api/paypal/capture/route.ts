import client from "@/utils/paypal"
import { NextRequest, NextResponse } from "next/server";
const paypal = require('@paypal/checkout-server-sdk')

export async function POST(req: NextRequest) {
  const body = await req.formData();
  const orderId = body.get('orderId')

  if(!orderId) {
    return NextResponse.json({ message: 'Please Pprovide orderId', success: false }, { status: 400 })
  }

  //Capture order to complete payment
  const paypalClient = client()
  const request = new paypal.orders.OrdersCaptureRequest(orderId)
  request.requestBody({})
  const response = await paypalClient.execute(request)
  
  if (!response) {
    return NextResponse.json({ message: "Paypal couldn't capture order", success: false }, { status: 400 })
  }

  // Update order in DB

  return NextResponse.json({ message: 'Paid successfuly! Thank you!', success: true, data: { order: response.result } })
}
