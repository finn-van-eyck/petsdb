import express, { Request, Response } from "express";
import path from "path";
import {Pets, getAllPets } from "./services/petsservices";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */
router.get("/", async(req: Request, res: Response): Promise<void> => {
    const pets: Pets[] = await getAllPets();
    res.render("owners", { Pets : pets ,title: "Home" });
});

router.get("/edit_owner/:id", (req: Request, res: Response): void => {
    const id : number = parseInt(req.params.id as string);
    res.render("owners", { title: "Edit" });
});

export default router;