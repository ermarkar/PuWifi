var path = require("path");
var _ = require("underscore");

module.exports = function (router) {

    router.get("/customads", (req, res) => {
        var customAds = require("../data/custom_ads.json");
        var validMinAds = _.filter(customAds.minAds, (minAd) => {
            return new Date(minAd.endDate) > new Date();
        });

        var validFullAds = _.filter(customAds.fullAds, (fullAd) => {
            return new Date(fullAd.endDate) > new Date();
        });

        var customAds = { minAds: validMinAds, fullAds: validFullAds };
        res.json(customAds);
    });

    router.get("/getad/:size/:device/:id", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "..", process.env.STORAGE_IMAGE,
            ((req.params.id + "_banner_" + req.params.size + "_" + req.params.device + ".jpg"))));
    });

    return router;
};