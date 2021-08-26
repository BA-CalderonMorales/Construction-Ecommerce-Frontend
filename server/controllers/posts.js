import express from 'express'; 
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => {    
    const { pages } = req.query;
    
    try {
        const LIMIT = 3;
        const startIndex = ( Number(pages) - 1 ) * LIMIT // Get the starting index of every page.

        const total = await PostMessage.countDocuments({});
        // Get the post from newest to oldest. Sort by id, limit them to 4 posts, skip everything until startIndex.
        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(pages), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json( { message:error.message } );
    }
}

// Query -> /posts?page=1 -> page = 1
// Params -> /posts/123 -> id = 123

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;
    
    try {
        const title = new RegExp(searchQuery, 'i');
        // Find me all the posts that match one of the two criteria : title || is one of tags equal to one of the tags in db.
        const posts = await PostMessage.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });

        res.json({ data: posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    
    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
    
    try {    
        await newPostMessage.save();
        
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deletePost = async (req, res) => {
    
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) 
    {
        return res.status(404).send(`No post with id ${id}`); // post = id, title, name, message, tags
    }
    await PostMessage.findByIdAndRemove(_id);

    res.json({ message: 'Post deletion successful '});
}

export const updatePost = async (req, res) => {
    
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) 
    {
        return res.status(404).send(`No post with id ${id}`); // post = id, title, name, message, tags
    }
    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    } catch (error) {
        console.log(error);
    }
    
    res.status(201).json(updatedPost);
}


export const likePost = async (req, res) => {

    const { id: _id } = req.params;

    // req.userId is now usable from middleware...
    if (!req.userId) return res.json({ message: 'Unauthenticated' });

    if (!mongoose.Types.ObjectId.isValid(_id)) 
    {
        return res.status(404).send(`No post with id ${id}`); // post = id, title, name, message, tags
    } else {
        console.log(res);
    }

    try {
        const specificPost = await PostMessage.findById(_id);

        const index = specificPost.likes.findIndex((id) => id === String(req.userId));

        // Will update the model with the appropriate number of likes
        if (index === -1) {
            // allows a user to like a post once
            specificPost.likes.push(req.userId);
        } else {
            // allows a user to dislike a post.
            specificPost.likes = specificPost.likes.filter((id) => id !== String(req.userId));
        }

        const updatedPost = await PostMessage.findByIdAndUpdate(_id, specificPost, { new: true });
        
        res.status(201).json(updatedPost);
    } catch (error) {
        console.log(error);
    }
}

export const dislikePost = async (req, res) => {

    const { id: _id } = req.params;

    // req.userId is now usable from middleware...
    if (!req.userId) return res.json({ message: 'Unauthenticated' });

    if (!mongoose.Types.ObjectId.isValid(_id)) 
    {
        return res.status(404).send(`No post with id ${id}`); // post = id, title, name, message, tags
    } else {
        console.log(res);
    }

    try {
        const specificPost = await PostMessage.findById(_id);

        const index = specificPost.dislikes.findIndex((id) => id === String(req.userId));

        // Will update the model with the appropriate number of likes
        if (index === -1) {
            // allows a user to like a post once
            specificPost.dislikes.push(req.userId);
        } else {
            // allows a user to dislike a post.
            specificPost.dislikes = specificPost.dislikes.filter((id) => id !== String(req.userId));
        }

        const updatedPost = await PostMessage.findByIdAndUpdate(_id, specificPost, { new: true });
        
        res.status(201).json(updatedPost);
    } catch (error) {
        console.log(error);
    }
}

export default router;