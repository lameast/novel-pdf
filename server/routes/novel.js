import express from 'express';
import {getNovel} from '../controllers/novel.js';

const router = express.Router();

router.get('/', getNovel);

export default router;