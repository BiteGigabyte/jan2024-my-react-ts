import React, {FC} from 'react';
import {IUserPostsModel} from "../../../models";

interface IProps {
    post: IUserPostsModel;
}

const UserPostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export {UserPostComponent};