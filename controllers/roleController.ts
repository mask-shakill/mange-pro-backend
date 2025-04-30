import { Request, Response } from "express";
import * as roleService from "../services/roleService";

export const createRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ message: "Name is required" });
      return;
    }

    const role = await roleService.createRole(name);
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ message: "Error creating role" });
  }
};

export const getAllRoles = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const roles = await roleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching roles" });
  }
};

export const getRoleById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const role = await roleService.getRoleById(Number(req.params.id));
    if (!role) {
      res.status(404).json({ message: "Role not found" });
      return;
    }

    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: "Error fetching role" });
  }
};

export const updateRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;
    const updatedRole = await roleService.updateRole(
      Number(req.params.id),
      name
    );
    if (!updatedRole) {
      res.status(404).json({ message: "Role not found" });
      return;
    }

    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ message: "Error updating role" });
  }
};

export const deleteRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleted = await roleService.deleteRole(Number(req.params.id));
    if (!deleted) {
      res.status(404).json({ message: "Role not found" });
      return;
    }

    res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting role" });
  }
};
