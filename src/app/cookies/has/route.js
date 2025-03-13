import { cookies } from 'next/headers';

export async function GET() {
    const exists = cookies().has('user'); // Returns true or false
    return Response.json({ exists });
}
