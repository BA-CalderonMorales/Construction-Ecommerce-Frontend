import axios from 'axios';

// https://construction-ecommerce.herokuapp.com/ - When deployment ready
// http://localhost:5000 - Server side development - MongoDB
// https://localhost:44394 - Server side development - ASP.Net Core Entity Framework


const API = axios.create({ baseURL: 'http://localhost:5000' }); 

const ASP_API = axios.create({ baseURL: 'https://localhost:44394'}, { headers: { "Content-Type": "application/json" } }) 


API.interceptors.request.use((req) => {
    
    if (localStorage.getItem('profile')) { // If the item exists...
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

// /postSearch
export const fetchPostsBySearch = (searchQuery) => API.get(`/postSearch/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`) // FETCH_BY_TERMS/TAGS


// /postDetails
export const fetchPost = (id) => API.get(`/postDetails/${id}`); // FETCH_POST

// /posts
export const fetchPosts = (page) => API.get(`/posts?page=${page}`); // FETCH_ALL
export const createPost = (newPost) => API.post(`/posts`, newPost); // CREATE
export const likePost = (id) => API.patch(`/posts/${id}/like`); // LIKE_POST
export const dislikePost = (id) => API.patch(`/posts/${id}/dislike`); // DISLIKE_POST
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost); // UPDATE
export const deletePost = (id) => API.delete(`/posts/${id}`); // DELETE

// /auth
export const signIn = (formData) => API.post(`user/signin`, formData); // SIGN IN
export const signUp = (formData) => API.post(`user/signup`, formData); // SIGN UP

// /allUsers
export const fetchUsers = () => API.get(`/allUsers`); // FETCH_ALL_USERS


/* ASP.Net Core Entity Framework Axios calls */

// /api/contracts
export const createContract = (contract) => ASP_API.post('/api/contracts/contract', contract);
export const getContracts = () => ASP_API.get('/api/contracts');

// /api/authentication
export const adminLogin = (formData) => ASP_API.post('/api/authentication/login', formData);

// /api/authentication
export const adminData = (admin) => ASP_API.get('/api/applicationuser/user', { headers: { 
        Authorization: 'Bearer ' + admin 
    } 
})
