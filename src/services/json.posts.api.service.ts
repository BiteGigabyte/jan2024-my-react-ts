import {AxiosResponse} from "axios";

import {ICommentsModel, IPostsModel} from "../models";
import {axiosServiceJson} from "./axios.service.json";
import {urls} from "../constants";

const postsApiService = {
    getAllPosts: async (): Promise<AxiosResponse<IPostsModel[]>> => {
        return await axiosServiceJson.get(urls.posts);
    },
    getCommentsOfPosts: async  (id: string): Promise<AxiosResponse<ICommentsModel[]>> => {
        return await axiosServiceJson.get(urls.postComments(id));
    }
}

export {
    postsApiService
}