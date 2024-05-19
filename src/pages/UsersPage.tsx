import React from 'react';
import {Outlet} from "react-router-dom";

import {UsersComponent} from "../components";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};