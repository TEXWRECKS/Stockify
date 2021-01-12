const {getItem, saveItem} = require('../../controllers/AmazonController')
const {getUsersSavedItems} = require('../../controllers/UserProductController')
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
    res.status(200).json(item);
});

router.post("/saveItem", async (req, res) => {
    // reads the url field from the body of the message sent by the front end
    console.log(`[stockifyRoutes] (saveItem) : Data recieved from front-end ${JSON.stringify(req.body)}`)
    saveitem = await saveItem("smrodriguez88@gmail.com", item)
    res.status(200).json(true);
});

router.post("/getUsersSavedItems", async (req, res) => {
    // reads the username sent from the front-end to retrieve the users saved items
    console.log(`[stockifyRoutes] (getUsersSavedItems) : Retrieving items for user ${req.body.params.user}`)
    saveitem = await getUsersSavedItems(req.body.params.user)
    res.status(200).json(saveitem);
});

module.exports = router;