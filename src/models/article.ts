import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Article extends Model {
    public id!: number;
    public title!: string;
    public nickname!: string;
    public content!: string;
    public creationDate!: Date;
}

Article.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'articles',
        sequelize,
    },
);

export default Article;