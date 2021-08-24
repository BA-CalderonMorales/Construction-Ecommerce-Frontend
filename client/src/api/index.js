import axios from 'axios';

// This use to be http://https://localhost:5000/posts when I was still in development.
const url = 'https://construction-ecommerce.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url); // FETCH_ALL

export const deletePost = (id) => axios.delete(`${url}/${id}`); // DELETE

export const createPost = (newPost) => axios.post(url, newPost); // CREATE

export const likePost = (id) => axios.patch(`${url}/${id}/like`); // LIKE_POST

export const dislikePost = (id) => axios.patch(`${url}/${id}/dislike`); // DISLIKE_POST

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost); // UPDATE