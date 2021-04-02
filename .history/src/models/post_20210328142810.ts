import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

class Post extends Model {
  public id!: number;

  public content!: string;
}

Post.init({
  content: {
    type: DataTypes.TEXT, // 매우 긴 글
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Post',
  tableName: 'post',
  charset: 'utf8mb4', //  한글+이모티콘
  collate: 'utf8mb4_general_ci',
});

export const associate = (db: dbType) => {
  db.Post.belongsTo(db.User); 
};

export default Post;
