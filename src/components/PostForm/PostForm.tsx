import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {IPostModel} from "../../models/IPostModel";
import {postValidator} from "../../validators/post.validator";
import {postService} from "../../services/posts.service.json";

const PostForm: FC = () => {
    let {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}
    } = useForm<IPostModel>({mode: "all", resolver: joiResolver(postValidator)});


    const save: SubmitHandler<IPostModel> = async (formValues: IPostModel) => {
        // console.log(formValues.body);
        await postService.create(formValues);
        reset();
        // const {data} = await postService.create(formValues);
        // setPostss(prev => [...prev, data])
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="number"{...register('userId')}/>
                {
                    errors.userId && <span>{errors.userId.message}</span>
                }
                <br/>
                <input type="text" {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="text" {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <button disabled={!isValid}>save</button>
            </form>
        </div>
    );
};

export default PostForm;