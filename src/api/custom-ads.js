const db = require("../db/db-connect");

module.exports = function (router) {
    /**
     * To get the list of available and active custom ads
     */
    router.get("/customads", (req, res) => {
        var query = "select * from get_custom_ads() as customAds;";
        db.query(query, (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                var ads = result[0].customads;

                if (ads.length > 0) {
                    res.send({ data: ads });
                } else {
                    res.json({ message: "No Data found." })
                }
            }
        });
    });

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