// src/models/roleModel.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database/config";

export interface IRole {
  id: number;
  name: string;
}

export interface RoleCreationAttributes extends Optional<IRole, "id"> {}

class Role extends Model<IRole, RoleCreationAttributes> implements IRole {
  public id!: number;
  public name!: string;
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Role",
    tableName: "roles",
    timestamps: true,
  }
);

export default Role;
