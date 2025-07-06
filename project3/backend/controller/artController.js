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

export async function updateArtInformation(req, res) {
    try {
        const {
            FirstName, LastName, YearOfWork, GalleryCountry, GalleryCity,
            GalleryName, Medium, Cost, WikiLink, Description
        } = req.body;

        const updateArtInfo = await Art.findByIdAndUpdate(
            req.params.id, { FirstName, LastName, YearOfWork, GalleryCountry, GalleryCity, GalleryName, Medium, Cost, WikiLink, Description },
            { new: true },
        );

        if (!updateArtInfo) return res.status(404).json({ message: "unable to update art information" });
        res.status(200).json(updateArtInfo);

    } catch (error) {
        console.error("Error in updateart controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}