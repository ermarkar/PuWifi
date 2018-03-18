var path = require("path");
const db = require("../db/db-connect");

module.exports = function (router) {
    /**
     * Server the ad based on device, size and id
     */
    router.get("/getlatest", (req, res) => {
        var filePath = path.join(__dirname, "..", "..", process.env.STORAGE_NOTIFICATION_IMAGE, "notification.gif");
        res.sendFile(filePath);
    });

    /**
     * To get the notifications
     */
    router.get("/getnotifications/:searchText/:pageNo/:count", (req, res) => {
        var query = "select * from get_notifications('" + req.params.searchText + "'," + req.params.pageNo + "," + req.params.count + ");";

        db.query(query, (err, result) => {
            if (err) {
                res.status(400).send(err);
            }
            res.send(result);
        })
    });

    return router;
};