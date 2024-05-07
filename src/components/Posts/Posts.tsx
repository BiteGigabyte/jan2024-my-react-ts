import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models";
import getAllPosts from "../../services/posts.api.service";
import Post from "./Post/Post";

interface IPropsId {
    userID: number
}

interface IPostsResponseModel {
    posts: IPostModel[]
}

const Posts: FC<IPropsId> = ({userID}) => {

    const [posts, setPosts] = useState<IPostModel[]>();

    useEffect(() => {
    if(userID >= 0) {
        console.log(userID);
        getAllPosts(userID).then(({data}) => {
            setPosts(data.posts);
            console.log(data);
        })
    }
    }, [userID]);


    return (
        <div>
            {posts && posts.map(post => <Post key={post.id} {...post}/>)}
        </div>
    );
};

export default Posts;