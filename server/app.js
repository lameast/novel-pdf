import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));