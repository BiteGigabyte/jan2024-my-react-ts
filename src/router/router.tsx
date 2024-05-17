import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {HomePage} from "../pages";
import {UsersComponent} from "../components";
import {PostsComponent} from "../components";
import {CommentsComponent} from "../components";

export const routerConfig = createBrowserRouter(
    [
        {path: '/', element: <MainLayout/>, children: [
                {index: true, element: <Navigate to={'home'}/>},
                {path: 'home', element: <HomePage/>},
                {path: 'users', element: <UsersComponent/>},
                {path: 'posts', element: <PostsComponent/>},
                {path: 'comments', element: <CommentsComponent/>},
            ]}
    ]
);