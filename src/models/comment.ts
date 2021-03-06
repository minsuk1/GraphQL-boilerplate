import {DataTypes, Model, HasManyGetAssociationsMixin} from 'sequelize';
import {sequelize} from './sequelize';
import {dbType} from './index';
import User from './user';

class Comment extends Model {
  public id!: number;

  public content!: string;
}

Comment.init({
  content: {
    type: DataTypes.TEXT, // 긴 글
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Comment',
  tableName: 'comment',
  charset: 'utf8mb4',
  collate: 'utf8mb4_general_ci',
});

export const associate = (db: dbType) => {
  db.Comment.belongsTo(db.User,
    {as: 'Owner', foreignKey: 'userId', targetKey: 'id'} );
};

export default Comment;
