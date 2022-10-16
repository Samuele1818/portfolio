import { NextApiRequest, NextApiResponse } from 'next'

var SibApiV3Sdk = require('sib-api-v3-sdk')
var defaultClient = SibApiV3Sdk.ApiClient.instance

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let apiKey = defaultClient.authentications['api-key']
  apiKey.apiKey = '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'
  
  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
  
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
  
  sendSmtpEmail.subject = req.query.name
  sendSmtpEmail.textContent = req.query.message
  sendSmtpEmail.sender = { name: req.query.name, email: req.query.email }
  sendSmtpEmail.to = [{ email: 'samsciatore.19@gmail.com', name: 'Samuele' }]
  
  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail)
    res.status(200).json(data)
  } catch (e) {
    res.status(500).json(e)
  }
}
