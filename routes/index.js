const router = require("express").Router();
const path = require("path");
const testRoutes = require("./api/testRoutes");

// Adds "/api" to any calls made 
router.use("/api", testRoutes)

// HTML route
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;