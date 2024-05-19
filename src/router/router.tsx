import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {CommentsPage, HomePage, PostsPage, UsersPage} from "../pages";
import {UserPostsPage} from "../pages";
import {PostCommentsPage} from "../pages";

export const routerConfig = createBrowserRouter(
    [
        {path: '/', element: <MainLayout/>,
            errorElement: <h1>wtf are you doing maaaaan????</h1>,
            children: [
                {index: true, element: <Navigate to={'home'}/>},
                {path: 'home', element: <HomePage/>},
                {path: 'users', element: <UsersPage/>,
                    children: [
                        {path: ':id', element: <UserPostsPage/>}
                    ]
                },
                {path: 'posts', element: <PostsPage/>,
                    children: [
                        {path: ':id', element: <PostCommentsPage/>}
                    ]},
                {path: 'comments', element: <CommentsPage/>},
            ]}
    ]
);