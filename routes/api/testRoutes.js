const router = require("express").Router();
const db = require("../../models");

// Routes will go here (.get, .post, etc...)
router.post("/ids", (req, res) => {
    db.Test.create({ body })
        .then((newId) => {
            res.json(newId);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    });

router.get("/ids", (req, res) => {
    db.Test.find({})
    .then((dbId) => {
        res.json(dbId);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

module.exports = router;