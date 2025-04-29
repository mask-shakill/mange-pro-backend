import { Request, Response } from "express";
import Role from "../models/roleModel";

export const createRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ message: "Role name is required" });
      return;
    }
    const role = await Role.create({ name });
    res.status(201).json(role);
  } catch (error) {
    console.error("Error creating role:", error);
    res.status(500).json({ message: "Error creating role" });
  }
};

export const getAllRoles = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).json({ message: "Error fetching roles" });
  }
};
