const router = require("express").Router();
const path = require("path");
const stockifyRoutes = require("./api/stockifyRoutes");

// Adds "/api" to any calls made 
router.use("/api", stockifyRoutes)

// HTML route
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;