import React from 'react';
import {Outlet} from "react-router-dom";

import {PostsComponent} from "../components";

const PostsPage = () => {

    return (
        <div>
            <Outlet/>
            <PostsComponent/>
        </div>
    );
};

export {PostsPage};