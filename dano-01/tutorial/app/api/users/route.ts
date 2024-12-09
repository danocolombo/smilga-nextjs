import { fetchUsers, saveUser } from '@/utils/actions';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
    // console.log(request);
    // const { searchParams } = new URL(request.url);
    // const id = searchParams.get('id');
    console.log(request.nextUrl.searchParams.get('id'));
    const users = await fetchUsers();
    // const newUsers = [
    //     ...users,
    //     { id: Date.now().toString(), firstName: 'John', lastName: 'Doe' },
    // ];
    return Response.json(users);
};
export const POST = async (req: Request) => {
    const user = await req.json();
    const newUser = { ...user, id: Date.now().toString() };
    await saveUser(newUser);
    return Response.json({ msg: 'user created' });
};
