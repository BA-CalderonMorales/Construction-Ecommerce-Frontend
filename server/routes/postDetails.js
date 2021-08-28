import express from 'express';

import { getPost } from '../controllers/postDetails.js';

const router = express.Router();

// ALl of these routes begin with /postDetails

router.get('/:id', getPost); // FETCH_POST - Everyone

export default router;