import express from 'express';

import { getPostsBySearch } from '../controllers/postSearch.js';

const router = express.Router();

// ALl of these routes begin with /postSearch

router.get('/search', getPostsBySearch); // FETCH_BY_SEARCH - Everyone

export default router;