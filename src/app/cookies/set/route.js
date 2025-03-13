import { cookies } from 'next/headers';

export async function GET() {
    cookies().set('user', 'JohnDoe', { maxAge: 3600 }); // Set cookie for 1 hour
    return Response.json({ message: 'User cookie set!' });
}
