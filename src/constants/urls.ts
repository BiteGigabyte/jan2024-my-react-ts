const baseURL: string = 'https://jsonplaceholder.typicode.com';

type urlsType = {
    posts: string;
    users: string;
    comments: string;
};
const urls: urlsType  = {
    posts: '/posts',
    users: '/users',
    comments: '/comments'
}

export {
    baseURL,
    urls
}