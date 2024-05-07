import React, {FC} from 'react';

import {IPostModel} from "../../../models";

// type IPropsPostModel = {posts: IPostModel}

const Post: FC<IPostModel> = ({id, title, tags, userId, body, reactions}) => {


    return (
        <div>
            <h2>{id}, {title}</h2>
            <h3>{tags}, {userId}</h3>
            <h4>{body}, {reactions}</h4>
        </div>
    );
};

export default Post;