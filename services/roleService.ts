import Role from "../models/roleModel";

export const createRole = async (name: string) => {
  return await Role.create({ name });
};

export const getAllRoles = async () => {
  return await Role.findAll();
};

export const getRoleById = async (id: number) => {
  return await Role.findByPk(id);
};

export const updateRole = async (id: number, name: string) => {
  const role = await Role.findByPk(id);
  if (!role) return null;
  role.name = name;
  await role.save();
  return role;
};

export const deleteRole = async (id: number) => {
  const role = await Role.findByPk(id);
  if (!role) return null;
  await role.destroy();
  return role;
};
