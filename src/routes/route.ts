import express from 'express';

import article from './article.route';
import comment from './comment.route';

const router = express.Router();

router.use('/article', article);

router.use('/comment', comment);

export default router;

