import React, {FC} from 'react';
import {IUserPostsModel} from "../../models";
import {UserPostComponent} from "./UserPost";

interface IProps {
    posts: IUserPostsModel[];
}
const UserPostsComponent: FC<IProps>= ({posts}) => {

    return (
        <div>
            {posts.map(post => <UserPostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostsComponent};