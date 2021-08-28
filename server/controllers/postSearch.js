import express from 'express'; 
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPostsBySearch = async (req, res) => {
    // Query -> /posts/search?searchQuery=Project?tags=nice,project
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, 'i'); // i stands for ignore case.
        // Find me all the posts that match one of the two criteria : title || is one of tags equal to one of the tags in db.
        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});
        
        res.json({ data: posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;