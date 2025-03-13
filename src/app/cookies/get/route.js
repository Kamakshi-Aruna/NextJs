import {cookies} from "next/headers";

export async function GET(){
    const userCookie=cookies().get('user')
    return Response.json({ user: userCookie?.value || 'No cookie found' })
}