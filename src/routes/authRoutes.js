const express = require("express");

const router = express.Router();

// POST localhost:5000/api/auth/register
router.post("/register", () => {
    console.log("This is a register screen")
});

// POST localhost:5000/api/auth/login
router.post("/login", (request, response) => {
    response.json({
        "message": "This is the login screen."
    })
});

module.exports = router;