export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            // action.payload are the posts
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}