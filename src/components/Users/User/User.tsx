import React, {FC} from 'react';
import {IUserModel} from "../../../models";

// type IPropsUser = IUserModel & { lift?: (postId: number) => void };
type IPropsUser = {user: IUserModel, getPostsOfUser?: (id: number) => void };


const User: FC<IPropsUser> = ({user, getPostsOfUser = () => {} }) => {
    let {id, firstName, lastName, age, image} = user;

    const onClickHandlerCallback = () => {
        if (id) {
        getPostsOfUser(id);
        }
    };

    return (
        <div>

            <div>
            {id}, {firstName}, {lastName}, {age};
            </div>
            <img src={image} alt={firstName}/>
            <button onClick={onClickHandlerCallback}>User Posts</button>
        </div>
    );
};

export default User;