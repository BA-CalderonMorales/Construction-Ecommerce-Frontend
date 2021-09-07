import express from 'express'; 

import User from '../models/user.js';

const router = express.Router();

export const fetchUsers = async (req, res) => {   
    try {
        const users = await User.find().sort({ _id: -1 });

        res.status(200).json({ data: users });
    } catch (error) {
        res.status(404).json( { message:error.message } );
    }
}

export default router;