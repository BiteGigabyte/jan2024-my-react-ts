const baseURL: string = 'https://jsonplaceholder.typicode.com';

type urlsType = {
    posts: string;
    users: string;
    comments: string;
    userPosts: (id: string) => string;
    postComments: (id: string) => string;
};
const urls: urlsType  = {
    posts: '/posts',
    users: '/users',
    comments: '/comments',
    userPosts: (id) => `users/${id}/posts`,
    postComments: (id) => `/posts/${id}/comments`
}


export {
    baseURL,
    urls
}