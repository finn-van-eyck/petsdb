import express, { Request, Response } from "express";
import path from "path";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */
router.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "/views/owners.html"));
});

router.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "/views/edit_owners.html"));
});

export default router;