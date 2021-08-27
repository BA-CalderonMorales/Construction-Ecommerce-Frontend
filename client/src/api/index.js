import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }); // construction-ecommerce.netlify.app

API.interceptors.request.use((req) => {
    
    if (localStorage.getItem('profile')) { // If the item exists...
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export const fetchPosts = (page) => API.get(`/posts?page=${page}`); // FETCH_ALL
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`) // FETCH_BY_TERMS/TAGS
export const createPost = (newPost) => API.post(`/posts`, newPost); // CREATE
export const likePost = (id) => API.patch(`/posts/${id}/like`); // LIKE_POST
export const dislikePost = (id) => API.patch(`/posts/${id}/dislike`); // DISLIKE_POST
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost); // UPDATE
export const deletePost = (id) => API.delete(`/posts/${id}`); // DELETE

export const signIn = (formData) => API.post(`user/signin`, formData); // SIGN IN
export const signUp = (formData) => API.post(`user/signup`, formData); // SIGN UP