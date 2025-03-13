import { cookies } from 'next/headers';

export async function GET() {
    const allCookies = cookies().getAll(); // Returns an array of cookies
    return Response.json({ cookies: allCookies });
}
