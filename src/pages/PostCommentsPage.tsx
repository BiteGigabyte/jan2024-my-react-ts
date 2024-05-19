import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {ICommentsModel} from "../models";
import {postsApiService} from "../services";
import {PostCommentsComponent} from "../components";

const PostCommentsPage = () => {
    const {id} = useParams();

    const [comments, setComments] = useState<ICommentsModel[]>([])

    useEffect(() => {
        if (id) {
            postsApiService.getCommentsOfPosts(id).then(comments => setComments(comments.data));
        }
    }, [id]);

    return (
        <div>
            <PostCommentsComponent comments={comments}/>
            <hr style={{margin: '1% 7%'}}/>
        </div>
    );
};

export {PostCommentsPage};