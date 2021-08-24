import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
// https://stackoverflow.com/questions/51770772/mongoose-connect-first-argument-should-be-string-received-undefined
import dotenv from 'dotenv';
dotenv.config();

var app = express(); // First need to instantiate the app with express

var corsOptions = { // Then set up the corsOptions to pass in correct headers so that you don't get a Network error.
    "origin": "*",
    "methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "headers": "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true
}

app.use(cors(corsOptions)); // Allows Cross Origin to occur between localhost:3000 and localhost:5000
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true })) // Limits size of data being uploaded to server.
app.use('/posts', postRoutes); 
app.get('/', (req, res) => {
    res.send('Hello to Construction Ecommerce API');
});

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // Will notify me what port is being used.
    .catch((error) => console.log(`${error}`));

// Used to not get any sort of warnings in the console.
mongoose.set('useFindAndModify', false);
// https://www.mongodb.com/cloud/atlas ... database is held in the cloud.