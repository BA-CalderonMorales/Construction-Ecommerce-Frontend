import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost, dislikePost } from '../controllers/posts.js'

const router = express.Router();

// http://localhost:5000/posts
router.get('/', getPosts); // FETCH_ALL
router.post('/', createPost); // CREATE
router.patch('/:id', updatePost); // UPDATE
router.delete('/:id', deletePost); // DELETE
router.patch('/:id/like', likePost); // LIKE_POST
router.patch('/:id/dislike', dislikePost); // DISLIKE_POST

export default router;