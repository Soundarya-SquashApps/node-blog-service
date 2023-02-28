import express from 'express';
import { createArticle, getAllArticles, getOneArticle } from '../controllers/article.controller';

const router = express.Router();

// Get all articles
router.get('/', getAllArticles);

// Get an article by ID
router.get('/:id', getOneArticle);

// Create a new article
router.post('/', createArticle);

export default router;