import { DataTypes,  HasManyGetAssociationsMixin, Model } from 'sequelize';
import { sequelize } from './sequelize';
import Post from './post';
import { dbType } from './index';

class User extends Model {

  public readonly id!: number;
  public nickname!: string;
  public userId!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;


  public readonly Posts?: Post[];
  public getPosts!: HasManyGetAssociationsMixin<Post>;
}

User.init({

  nickname: {
    type: DataTypes.STRING(20), // 20글자 이하
    allowNull: false, // 필수
  },

  userId: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true, // 고유한 값
  },

  password: {
    type: DataTypes.STRING(100), // 100글자 이하
    allowNull: false,
  },

}, 

{
  sequelize,
  modelName: 'User',
  tableName: 'user',
  charset: 'utf8',
  collate: 'utf8_general_ci', // 한글이 저장돼요
});

export const associate = (db: dbType) => {
  db.User.hasMany(db.Post, {foreignKey: 'userId', 
  sourceKey: 'id' ,   as: 'Posts' });
};

export default User;

