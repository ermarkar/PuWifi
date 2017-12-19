var path = require("path");
module.exports = function (router) {
    var customAds = require("../data/custom_ads.json");
    router.get("/customads", (req, res) => {
        res.json(customAds);
    });

    router.get("/getad/:size/:id", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "..", process.env.STORAGE_IMAGE,
            ((req.params.id + "_banner_" + req.params.size + ".jpg"))));
    });

    return router;
};