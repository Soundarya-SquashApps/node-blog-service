import Article from '../models/article';

export const createArticle = async (req: any, res: any) => {
    const { title, nickname, creationDate } = req.body;
    try {
        const article = await Article.create({ title, nickname, creationDate });
        res.json(article);
    } catch (err) {
        console.error('Error while creating an article ', err);
        res.status(500).json({ message: 'Error while creating an article' });
    }
}

export const getAllArticles = async (req: any, res: any) => {
    try {
        const articles = await Article.findAll();
        res.json(articles);
    } catch (err) {
        console.error('Error while getting all articles', err);
        res.status(500).json({ message: 'Error while getting all articles' });
    }
}

export const getOneArticle = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const article = await Article.findByPk(id);
        if (article) {
            res.json(article);
        } else {
            res.status(404).json({ message: 'Article not found' });
        }
    } catch (err) {
        console.error('Error while getting an article', err);
        res.status(500).json({ message: 'Error while getting an article' });
    }
}