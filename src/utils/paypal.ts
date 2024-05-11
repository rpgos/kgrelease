const paypal = require('@paypal/checkout-server-sdk')

const getEnvironment = function () {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET

  // return process.env.NODE_ENV === 'production'
  //   ? new paypal.core.LiveEnvironment(clientId, clientSecret)
  //   : new paypal.core.SandboxEnvironment(clientId, clientSecret)
  return new paypal.core.SandboxEnvironment(clientId, clientSecret)
}

const client = function () {
  return new paypal.core.PayPalHttpClient(getEnvironment())
}

export default client
