import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {UserPostsComponent} from "../components";
import {IUserPostsModel} from "../models";
import {usersApiService} from "../services";

const UserPostsPage = () => {

    const {id} = useParams();
    // console.log(id);
    const location = useLocation();
    console.log(location);

    const [posts, setPosts] = useState<IUserPostsModel[]>([]);

    useEffect(() => {
        if (id) {
        usersApiService.getPostsOfUser(id).then(posts => setPosts(posts.data));
        }
    }, [id]);

    return (
        <div>
            <hr style={{margin: '1% 7%'}}/>
            <UserPostsComponent posts={posts}/>
        </div>
    );
};

export {UserPostsPage};