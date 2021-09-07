import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postSearchRoute from './routes/postSearch.js';
import postDetailsRoute from './routes/postDetails.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import allUsersRoutes from './routes/allUsers.js';
import dotenv from 'dotenv';

dotenv.config();

var app = express(); // First need to instantiate the app with express

app.use(cors()); // Allows Cross Origin to occur between localhost:3000 and localhost:5000

// Handle image size
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true })); // Limits size of data being uploaded to server.

app.use('/postSearch', postSearchRoute);
app.use('/postDetails', postDetailsRoute);
app.use('/posts', postRoutes); 
app.use('/user', userRoutes);
app.use('/allUsers', allUsersRoutes);

app.get('/', (req, res) => {
    res.send('Construction Ecommerce API - App Is Running');
});

const { PORT, CONNECTION_URL } = process.env;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // Will notify me what port is being used.
    .catch((error) => console.log(`${error}`)); 

mongoose.set('useFindAndModify', false);