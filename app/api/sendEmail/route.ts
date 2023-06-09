import { NextResponse } from 'next/server'
import {
 isValidEmail,
 isValidMessage,
 isValidName,
} from '../../../utils/validator'

const mailjet = require('node-mailjet')
const mailConn = mailjet.apiConnect(
 process.env.MAILJET_API_KEY,
 process.env.MAILJET_API_SECRET
)

export async function POST(req: Request) {
 if (req.method !== 'POST')
  return NextResponse.json(
   {
    error: 'Method not allowed. Use POST',
   },
   { status: 405 }
  )

 const { email, name, message } = await req.json()

 // Check if provided data is valid
 if (!isValidEmail(email))
  return NextResponse.json(
   {
    error: 'Invalid email provided',
   },
   { status: 400 }
  )

 if (!isValidName(name))
  return NextResponse.json(
   {
    error: 'Invalid name provided',
   },
   { status: 400 }
  )

 if (!isValidMessage(email))
  return NextResponse.json(
   {
    error: 'Invalid message provided',
   },
   { status: 400 }
  )

 try {
  // Send the email
  const response = await mailConn
   // specify method and version of the APIS
   .post('send', { version: 'v3.1' })
   .request({
    Messages: [
     {
      // Set the sender informations
      From: {
       Email: 'samsciatore.19@gmail.com',
       Name: name,
      },
      // Set the receiver
      To: [
       {
        Email: 'samsciatore.19@gmail.com',
        Name: 'Samuele',
       },
      ],
      // Set the subject to specify name and email of the client
      Subject: `${name} writes to you. Email ${email}`,
      // Set the message of the email
      TextPart: message,
     },
    ],
   })
  return NextResponse.json(
   { message: response.body },
   { status: 200 }
  )
 } catch (e) {
  return NextResponse.json(
   { error: e },
   { status: 500 }
  )
 }
}
