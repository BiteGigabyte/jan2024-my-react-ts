import React, {FC} from 'react';
import {ICommentsModel} from "../../../models";

interface IProps {
    comment: ICommentsModel;
}

const PostCommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            {comment.email}
        </div>
    );
};

export {PostCommentComponent};