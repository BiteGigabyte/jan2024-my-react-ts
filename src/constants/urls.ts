const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        byID: (id: number) => urls.users.base + '/' + id
    },
    posts: {
        base: '/posts',
        byID: (id: number) => urls.posts.base + '/' + id
    }
}

export {
    urls,
    baseURL
}