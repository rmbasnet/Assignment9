import mongoose from "mongoose";

const artSchema = new mongoose.Schema(
    {
        FirstName: String,
        LastName: String,
        YearOfWork: Number,
        GalleryCountry: String,
        GalleryCity: String,
        GalleryName: String,
        Medium: String,
        Cost: Number,
        WikiLink: String,
        Description: String
        // ,
        // content: {
        //     type: String,
        //     required: true,
        // },

    },
    { collection: 'ArtPieces' }
)

const Art = mongoose.model("Art", artSchema);
export default Art;