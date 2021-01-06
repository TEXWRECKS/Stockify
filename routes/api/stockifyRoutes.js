const {getItem, saveItem} = require('../../controllers/AmazonController.js')

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

router.post("/getItem", async (req, res) => {
    // reads the url field from the body of the message sent by the front end
    console.log(`[stockifyRoutes] (getItem) : Data recieved from front-end ${JSON.stringify(req.body)}`)
    url = req.body.params.url
    item = await getItem(url)
    console.log(item);
    res.json(item);
});

router.post("/saveItem", async (req, res) => {
    // reads the url field from the body of the message sent by the front end
    console.log(`[stockifyRoutes] (saveItem) : Data recieved from front-end ${JSON.stringify(req.body)}`)
    saveitem = await saveItem("smrodriguez88@gmail.com", item)
    res.json(true);
});

module.exports = router;