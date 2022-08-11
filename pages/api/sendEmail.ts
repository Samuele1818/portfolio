import { NextApiRequest, NextApiResponse } from 'next'
const ib = require('sib-api-v3-sdk')

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const client = ib.ApiClient.instance
  const apiKey = client.authentications['api-key']
  apiKey.apiKey = process.env.SEND_IN_BLUE_API_KEY
  
  const tranEmailApi = new ib.TransactionalEmailsApi()
  
  const sender = {
    email: req.query.email,
    name: req.query.name,
  }
  
  const receivers = [
    {
      email: 'samsciatore.19@gmail.com',
    },
  ]
  
  tranEmailApi
    .sendTransacEmail({
      sender,
      to: receivers,
      textContent: req.query.message
    })
    .then(res.status(200).send("Email sent successfully"))
    .catch(e => res.status(500).send(`Error: ${e}`))
}
