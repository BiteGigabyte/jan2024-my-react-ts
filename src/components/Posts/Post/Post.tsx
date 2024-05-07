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



// interface IProps {
//     post: IPostModel;
// }
//
// const Post: FC<IProps> = ({post}) => {
//
//
//     return (
//         <div>
//             <h2>{post.id}, {post.title}</h2>
//             <h3>{post.tags}, {post.userId}</h3>
//             <h4>{post.body}, {post.reactions}</h4>
//         </div>
//     );
// };
//

export default Post;