import React from 'react';
import UsersItem from './UsersItem';
import Spinner from '../layouts/Spinner';

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UsersItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
};

export default Users;