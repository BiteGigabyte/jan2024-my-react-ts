import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

const Post: FC<IPostModel> = ({userId, id, title, body}) => {
    return (
        <div>
            <h2>userId: {userId}. id: {id}</h2>
            <h3>title: {title}</h3>
            <h4>body: {body}</h4>
        </div>
    );
};

export {Post};