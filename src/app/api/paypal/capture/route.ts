import { prisma } from "@/db";
import client from "@/utils/paypal"
import { NextRequest, NextResponse } from "next/server";
const paypal = require('@paypal/checkout-server-sdk')

export async function POST(req: NextRequest) {
  const body = await req.formData();
  const orderId = body.get('orderId')

  if(!orderId) {
    return NextResponse.json({ message: 'Please provide orderId', success: false }, { status: 400 })
  }

  //Capture order to complete payment
  const paypalClient = client()
  const request = new paypal.orders.OrdersCaptureRequest(orderId)
  request.requestBody({})
  const response = await paypalClient.execute(request)
  
  if (!response) {
    return NextResponse.json({ message: "Paypal couldn't capture order", success: false }, { status: 400 })
  }

  await prisma.order.update({
    where: { paypalOrderId: response.result.id },
    data: { email: response.result.payment_source.paypal.email_address }
  })

  return NextResponse.json({ message: "Paid successfuly! We'll add your album shortly. Thank you!", success: true, data: { order: response.result } })
}
