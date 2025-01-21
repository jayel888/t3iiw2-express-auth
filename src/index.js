const { app } = require("./server.js");
const { connectDB } = require("./utils/database");


require("dotenv").config();

// GET the PORT
const PORT = process.env.PORT || 8008;

app.listen(PORT, async() => {
    await connectDB();

    console.log("Server is running on post" + PORT);
});