import mongoose from "mongoose";

const artSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true,
        }
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