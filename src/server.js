
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes")
const postRoutes = require("./routes/postRoutes")

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// app.verb(path, callback);
app.get("/", (request, response) => {
    // response.send("<h1>Hello World!</h1>");

    response.json({
        message: "Hello World!"
    });
});

app.use("/api/auth", authRoutes)

app.use("/api/posts", postRoutes)

module.exports = {
    app
}
