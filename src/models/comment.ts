import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

import Article from './article';

class Comment extends Model {
    public id!: number;
    public content!: string;
    public nickname!: string;
    public creationDate!: Date;
}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: 'comments',
        sequelize,
    },
);

Comment.belongsTo(Article, {
    as: 'article',
    foreignKey: 'articleId',
});

Article.hasMany(Comment, {
    as: 'comment',
    foreignKey: 'articleId',
});

Comment.belongsTo(Comment, {
    as: 'comment',
    foreignKey: 'commentId',
});

Comment.hasMany(Comment, {
    as: 'sub-comment',
    foreignKey: 'commentId',
});

export default Comment;