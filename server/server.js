import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import novelRoutes from './routes/novel.js'

dotenv.config();

const PORT = process.env.PORT || 5000; //Port app runs on

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(bodyParser.json());//Body parser for request and response body

app.use('/novel', novelRoutes); //Routes for novels

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));