import {AxiosResponse} from "axios";

import {IPostsModel} from "../models";
import {axiosServiceJson} from "./axios.service.json";
import {urls} from "../constants";

const postsApiService = {
    getAllPosts: async (): Promise<AxiosResponse<IPostsModel[]>> => {
        return await axiosServiceJson.get(urls.posts);
    }
}

export {
    postsApiService
}