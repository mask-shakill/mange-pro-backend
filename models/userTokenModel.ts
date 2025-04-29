import { DataTypes, Model } from "sequelize";
import sequelize from "../database/config";

interface IToken {
  id: number;
  token: string;
  userId: number;
}

class Token extends Model<IToken> implements IToken {
  public id!: number;
  public token!: string;
  public userId!: number;
}

Token.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Token",
    tableName: "tokens",
    timestamps: true,
  }
);

export default Token;
