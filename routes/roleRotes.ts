import { Router } from "express";
import { createRole, getAllRoles } from "../controllers/roleController";

const router = Router();
router.post("/", createRole);
router.get("/", getAllRoles);

export default router;
