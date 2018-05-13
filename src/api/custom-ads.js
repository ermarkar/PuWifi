var path = require("path");
const db = require("../db/db-connect");

module.exports = function (router) {
    // var customAds = require("../data/custom_ads.json");

    /**
     * To get the list of available and active custom ads
     */
    // router.get("/customads", (req, res) => {
    //     var validMinAds = _.filter(customAds.minAds, (minAd) => {
    //         return new Date(minAd.endDate) > new Date();
    //     });

    //     var validFullAds = _.filter(customAds.fullAds, (fullAd) => {
    //         return new Date(fullAd.endDate) > new Date();
    //     });

    //     var customAds = { minAds: validMinAds, fullAds: validFullAds };
    //     res.json(customAds);
    // });

    /**
     * Serve the ad banner
     */
    // router.get("/getadimage", (req, res) => {
    //     var filePath = path.join(__dirname, "..", "..", process.env.STORAGE_IMAGE, req.query.name);
    //     console.log(filePath);
    //     res.sendFile(filePath);
    // });

    /**
     * To serve the random ad 
     */
    router.get("/randomad", (req, res) => {
        var query = "select * from get_custom_ads() as customAds;";
        db.query(query, (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                // get the valid ads based on size
                var ads = result[0].customads;

                if (ads.length > 0) {
                    // extract the array of valid ids
                    var randomAd = ads[Math.floor(Math.random() * ads.length)];
                    res.send(randomAd);
                } else {
                    res.json({ message: "No Data found." })
                }
            }
        });
    });

    return router;
};