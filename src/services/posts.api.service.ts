import axios, {AxiosResponse} from "axios";

import {IPostModel} from "../models";
import {axiosServiceJson} from "./axios.service.json";

interface IPostsResponseModel {
    posts: IPostModel[]
}

const getAllPosts = (userId: number): Promise<AxiosResponse<IPostsResponseModel>> => {
    return axiosServiceJson.get('/posts/user/' + userId);
}

export default getAllPosts;