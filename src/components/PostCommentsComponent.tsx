import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import {PostWithCommentsType} from "../models/PostWithCommentsType";

const PostCommentsComponent = () => {

    const {postStore: {allPosts}, commentStore: {allComments}} = useContextProvider();

    const [postWithComments, setPostWithComments] = useState<PostWithCommentsType[]>([]);

    const postWithCommentsArray = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comments => comments.postId === post.id)};
            })
        }
    }, [allPosts, allComments])

    useEffect(() => {
        setPostWithComments(postWithCommentsArray);
    }, [postWithCommentsArray]);

    return (
        <div>
            {
                postWithComments.map(post => <div key={post.id}>
                    <div>{post.title}</div>
                    <ul>
                        {post.comments.map(comment => <li key={comment.id}>{
                            comment.body
                        }</li>)}
                    </ul>
                </div>)
            }
        </div>
    );
};

export {PostCommentsComponent};