import Comment from '../models/comment';

export const createComment = async (req: any, res: any) => {
    const { articleId, content, commentId } = req.body;
    try {
        const comment = await Comment.create({ content, articleId, commentId });
        res.json(comment);
    } catch (err) {
        console.error('Error while creating an comment ', err);
        res.status(500).json({ message: 'Error while creating an comment' });
    }
}

export const getAllArticleComments = async (req: any, res: any) => {
    try {
        const comments = await Comment.findAll({
            where: {
                articleId: req.params.articleId
            }
        });
        res.json(comments);
    } catch (err) {
        console.error('Error while getting an comment', err);
        res.status(500).json({ message: 'Error while getting an commet' });
    }
}