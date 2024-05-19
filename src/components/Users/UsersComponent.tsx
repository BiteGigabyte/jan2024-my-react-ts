import React, {FC, useEffect, useState} from 'react';

import {usersApiService} from "../../services";
import {IUserModel} from "../../models";
import {UserComponent} from "./User";

const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        usersApiService.getAllUsers().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            {users.map(user =><UserComponent key={user.id} user={user}/> )}
        </div>
    );
};

export {UsersComponent};