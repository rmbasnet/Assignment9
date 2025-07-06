import express from "express";
import { getAllArt, getArtById } from "../controller/artController.js";

const router = express.Router();

router.get("/", getAllArt);
router.get("/:id", getArtById);

export default router;