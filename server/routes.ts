import express, { Request, Response } from "express";
import path from "path";
import {Pets, getAllPets, getOnePet, saveAnimal } from "./services/petsservices";
import { renderFile } from "ejs";

const router = express.Router();

/**
 * GET REQUESTS
 */
router.get("/", async(req: Request, res: Response): Promise<void> => {
    const pets: Pets[] = await getAllPets();
    res.render("owners", { Pets : pets ,title: "Home" });
});

router.get("/edit_owner/:id", async (req: Request, res: Response): Promise<void> => {
    const id : number = parseInt(req.params.id as string);
    const pet: Pets = await getOnePet(id);
    res.render("edit_owner", { Pets: pet, title: "Edit" });
});

/**
 * POST REQUESTS
 */

router.post("/edit_owner/:id", async (req:Request, res:Response): Promise<void> => {
     const id : number = parseInt(req.params.id as string);
     const data:[] = req.body;
     console.log(data);
     saveAnimal(id, data);
     res.redirect('/')
})

export default router;