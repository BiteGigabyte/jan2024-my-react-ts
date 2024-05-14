const baseURL: string = 'https://jsonplaceholder.typicode.com';

type Urls = {
    posts: string;
};
const urls: Urls  = {
    posts: '/posts'
}

export {
    baseURL,
    urls
}