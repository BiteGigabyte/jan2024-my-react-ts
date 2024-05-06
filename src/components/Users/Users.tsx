import React, {FC, useEffect, useState} from 'react';

import {IUserModel} from "../../models";
import getAllUsers from "../../services/users.api.service";
import User from "./User/User";

interface IPropsUsers {
    getPostsOfUser: (id: number) => void
}

const Users: FC<IPropsUsers> = ({getPostsOfUser}) => {

    const [users, setUsers] = useState<IUserModel[]>()
    useEffect(() => {
    getAllUsers().then(({data: {users}}) => {
        setUsers(users);
        console.log(users);
    });
    }, []);


    return (
        <div>
            {users?.map((user) => (<User key={user.id} user={user} getPostsOfUser={getPostsOfUser}/>))}
        </div>
    );
};

export default Users;