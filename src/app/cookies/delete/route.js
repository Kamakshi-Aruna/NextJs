import { cookies } from 'next/headers';

export async function GET() {
    cookies().set('user', '', { maxAge: 0 }); // Delete cookie
    return Response.json({ message: 'User cookie deleted!' });
}
