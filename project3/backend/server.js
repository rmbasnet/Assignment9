const artRoutes = require("./routes/artRoutes.js")
const express = require('express');


const app = express();

app.use("/art", artRoutes);




app.listen(5000, () => {
    console.log("server has started on PORT: 5000");
});