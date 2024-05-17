import React, {FC} from 'react';
import {IPostsModel} from "../../../models";

interface IProps {
    post: IPostsModel;
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export {PostComponent};