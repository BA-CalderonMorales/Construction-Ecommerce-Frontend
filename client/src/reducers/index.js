import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import contracts from './contract';
import allUsers from './allUsers'

// Allows App.js to call posts via "state.posts"
export const reducers = combineReducers({ posts, auth, contracts, allUsers });

