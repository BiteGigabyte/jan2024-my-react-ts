import React, {FC} from 'react';
import {ICommentsModel} from "../../models";
import {PostCommentComponent} from "./PostComment";

interface IProps {
    comments: ICommentsModel[];
}

const PostCommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <PostCommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostCommentsComponent};