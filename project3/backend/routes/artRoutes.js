import express from "express";
import { getAllArt, getArtById, updateArtInformation } from "../controller/artController.js";

const router = express.Router();

router.get("/", getAllArt);
router.get("/:id", getArtById);
router.put("/:id", updateArtInformation)

export default router;