import express from 'express';

import { fetchUsers } from '../controllers/allUsers.js';

const router = express.Router();

// /allUsers
router.get('/', fetchUsers); // FETCH_ALL_USERS

export default router;