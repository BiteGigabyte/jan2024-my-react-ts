import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {postService} from "../../services/posts.service.json";
import {Post} from "../Post/Post";

const Posts: FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => {
            setPosts([...value]);
            console.log(value);
        })
    }, []);

    return (
        <div>
            {posts && posts.map(post => <Post key={post.id} {...post}/>)}
        </div>
    );
};

export {Posts};