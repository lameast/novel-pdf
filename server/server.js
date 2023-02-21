import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import novelRoutes from './routes/novel.js';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 5000; //Port app runs on

mongoose.connect(process.env.URI, 
    {useNewUrlParser: true},() => {
        console.log('Connected to MongoDB');
      });

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(bodyParser.json());//Body parser for request and response body

app.use('/newChapter', novelRoutes); //Routes for novels

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));