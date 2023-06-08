import { NextResponse } from 'next/server'
import {
 isValidEmail,
 isValidMessage,
 isValidName,
} from '../../../utils/validator'

var SibApiV3Sdk = require('sib-api-v3-sdk')
var defaultClient = SibApiV3Sdk.ApiClient.instance

export async function POST(req: Request) {
 if (req.method !== 'POST')
  return NextResponse.json({
   message: 'Method not allowed. Use POST',
  })

 const { email, name, message } = await req.json()

 // Check if provided data is valid
 if (!isValidEmail(email))
  return NextResponse.json({
   message: 'Invalid email provided',
  })
 if (!isValidName(name))
  return NextResponse.json({
   message: 'Invalid name provided',
  })
 if (!isValidMessage(email))
  return NextResponse.json({
   message: 'Invalid message provided',
  })

 // Instance of the api key
 let apiKey =
  defaultClient.authentications['api-key']
 apiKey.apiKey =
  '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'

 // Instance of the api
 let apiInstance =
  new SibApiV3Sdk.TransactionalEmailsApi()

 // Instance smtp service
 let sendSmtpEmail =
  new SibApiV3Sdk.SendSmtpEmail()

 // Set the subject of the email
 sendSmtpEmail.subject = name
 // Set the text of the email
 sendSmtpEmail.textContent = message
 // Set the sender (name and email)
 sendSmtpEmail.sender = {
  name: name,
  email: email,
 }
 // Set the personal email which will receive the email
 sendSmtpEmail.to = [
  {
   email: 'samsciatore.19@gmail.com',
   name: 'Samuele',
  },
 ]

 try {
  // Send the email
  const data = await apiInstance.sendTransacEmail(
   sendSmtpEmail
  )
  return NextResponse.json({ message: data })
 } catch (e) {
  return NextResponse.json({ error: e })
 }
}
