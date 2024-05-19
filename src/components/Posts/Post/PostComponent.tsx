import React, {FC} from 'react';
import {IPostsModel} from "../../../models";
import {Link} from "react-router-dom";

interface IProps {
    post: IPostsModel;
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <Link to={post.id.toString()}>{post.title}</Link>
        </div>
    );
};

export {PostComponent};