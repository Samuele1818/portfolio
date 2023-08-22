import { NextResponse } from 'next/server'
import { searchPosts } from '../../../utils/search'

export async function GET(req: Request) {
 if (req.method !== 'GET')
  return NextResponse.json(
   {
    error: 'Method not allowed. Use GET',
   },
   { status: 405 }
  )

 const { searchParams } = new URL(req.url)

 const searchParam =
  searchParams.get('searchParam') || ''

 try {
  const response = await searchPosts(searchParam)

  return NextResponse.json(
   { results: response },
   { status: 200 }
  )
 } catch (e) {
  return NextResponse.json(
   { error: e },
   { status: 500 }
  )
 }
}
