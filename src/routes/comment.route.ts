import express from 'express';
import { createComment, getAllArticleComments } from '../controllers/comment.controller';

const router = express.Router();

router.post('/', createComment);

router.get('/articleId', getAllArticleComments);

export default router;