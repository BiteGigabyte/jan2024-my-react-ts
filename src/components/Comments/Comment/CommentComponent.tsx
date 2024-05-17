import React, {FC} from "react";

import {ICommentsModel} from "../../../models";

interface IProps {
    comment: ICommentsModel;
}

const CommentComponent: FC<IProps> = ({comment}) => {

    return (
        <div>
            {comment.email}
        </div>
    );
};

export {CommentComponent};