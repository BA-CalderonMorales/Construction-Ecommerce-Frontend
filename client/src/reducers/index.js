import { combineReducers } from 'redux';

import posts from './posts'

// Allows App.js to call posts via "state.posts"
export const reducers = combineReducers({ posts });