import express from 'express';
import {getNovel, postNewChapter} from '../controllers/novel.js';


const router = express.Router();

router.get('/', getNovel);
router.post('/', postNewChapter)

export default router;