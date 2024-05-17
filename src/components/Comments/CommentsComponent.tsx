import React, {FC, useEffect, useState} from 'react';

import {ICommentsModel} from "../../models";
import {commentsApiService} from "../../services";
import {CommentComponent} from "./Comment";

const CommentsComponent: FC = () => {

    const [comment, setComment] = useState<ICommentsModel[]>([]);

    useEffect(() => {
        commentsApiService.getAllComments().then(comments => setComment(comments.data));
    }, []);

    return (
        <div>
            {comment.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );

};

export {CommentsComponent};