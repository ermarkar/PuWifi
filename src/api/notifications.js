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
    router.get("/notifications", (req, res) => {
        var searchText = req.query.searchText || "";
        var pageNo = req.query.pageNo || 1;
        var count = req.query.count || 5;
        var query = "select * from get_notifications('" + searchText + "'," + pageNo + "," + count + ") as notifications;";

        db.query(query, (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                var totalNotifications = 17;
                res.send({ dataCount: totalNotifications, data: result[0].notifications });
            }
        });
    });

    return router;
};