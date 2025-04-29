import { DataTypes, Model } from "sequelize";
import sequelize from "../database/config";
import Role from "./roleModel";
import Token from "./userTokenModel";

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
}

class User extends Model<IUser> implements IUser {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public password!: string;
  public static associate() {
    User.belongsTo(Role, { foreignKey: "roleId", as: "role" });

    User.hasOne(Token, { foreignKey: "userId", as: "token" });
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  }
);

export default User;
