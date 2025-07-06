import Art from "../models/Art.js";

export async function getAllArt(_, res) {
    try {
        const artPieces = await Art.find()
        // console.log(artPieces);
        res.status(200).json(artPieces);
    } catch (error) {
        console.log("Error in art controller", error);
        res.status(500).json({ message: "internal server error" });

    }

}

export async function getArtById(req, res) {
    try {
        const artPiece = await Art.findById(req.params.id);
        if (!artPiece) return res.status(404).json({ message: "Art Not found!" });
        res.json(artPiece);
    } catch (error) {
        res.status(500).json({ message: "cannot get art by id" });
        console.log("error in art controller, ", error);
    }
}

