import express from 'express';

import { getPostsBySearch, getPosts, createPost, updatePost, deletePost, likePost, dislikePost } from '../controllers/posts.js'

// Used to only allow users to edit data on the account that they logged into.
import auth from '../middleware/auth.js';

const router = express.Router();

// All of these routes begin with /posts
router.get('/search', getPostsBySearch); // Everyone
router.get('/', getPosts); // FETCH_ALL - Everyone
router.post('/', auth, createPost); // CREATE - Logged In
router.patch('/:id', auth, updatePost); // UPDATE - Logged In
router.delete('/:id', auth, deletePost); // DELETE - Logged In
router.patch('/:id/like', auth, likePost); // LIKE_POST - Logged In
router.patch('/:id/dislike', auth, dislikePost); // DISLIKE_POST - Logged In

export default router;