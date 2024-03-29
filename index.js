import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();

dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Memories API');
});

//connecting to database MongoDB
// const PORT = process.env.config.httpPort;
// const URL = process.env.CONNECTION_URL

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(() => console.log(`Server running on port`))) 
    .catch((error) => console.error(error.message))
    
