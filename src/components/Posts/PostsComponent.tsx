import React, {FC, useEffect, useState} from 'react';

import {postsApiService} from "../../services";
import {IPostsModel} from "../../models";
import {PostComponent} from "./Post";

const PostsComponent: FC = () => {

    const [posts, setPosts] = useState<IPostsModel[]>([]);

    useEffect(() => {
        postsApiService.getAllPosts().then(posts => setPosts(posts.data));
    }, []);

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsComponent};