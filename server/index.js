import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import cors from 'cors';

const app = express(); // First need to instantiate the app with express

var corsOptions = { // Then set up the corsOptions to pass in correct headers so that you don't get a Network error.
    "origin": "*",
    "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions)); // Allows Cross Origin to occur between localhost:3000 and localhost:5000
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true })) // Limits size of data being uploaded to server.
app.use('/posts', postRoutes); 


const CONNECTION_URL = "mongodb+srv://master:pass123@cluster0.4a890.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // Will notify me what port is being used.
    .catch((error) => console.log(`${error} There was this error, bro.`));

// Used to not get any sort of warnings in the console.
mongoose.set('useFindAndModify', false);


// https://www.mongodb.com/cloud/atlas ... database is held in the cloud.