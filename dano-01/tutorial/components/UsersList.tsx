import React from 'react';
import DeleteButton from '@/components/DeleteButton';
import { fetchUsers } from '@/utils/actions';
async function UsersList() {
    const users = await fetchUsers();
    return (
        <>
            <h3 className='text-xl'>UsersList</h3>
            <div className='mt-4'>
                {users.length ? (
                    <div>
                        {users.map((user) => (
                            <h4
                                key={user.id}
                                className='capitalize flex justify-between items-center mb-2'
                            >
                                {user.firstName} {user.lastName}
                                <DeleteButton id={user.id} />
                            </h4>
                        ))}
                    </div>
                ) : (
                    'No users found...'
                )}
            </div>
        </>
    );
}

export default UsersList;
