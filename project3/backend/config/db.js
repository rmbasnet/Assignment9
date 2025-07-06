import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ArtDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongodb connected successfully")
    } catch (error) {
        console.log("Conenction error in mongosb bullshit serhaksljdfhk", error);
        process.exit(1);
    }
}