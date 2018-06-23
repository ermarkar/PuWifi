var path = require("path");
const db = require("../db/db-connect");
require("../common/scripts/script");
const request = require('superagent');
TOKEN = "99999";
module.exports = function (router) {

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
                var totalNotifications = 0;
                // console.log(result[0].notifications[0].total);
                return res.send(result[0].notifications);
            }
        });
    });

    /**
     * To add notification to database and send to firebase server
     */
    router.post("/addnotification", (req, res) => {
        var title = req.body.title.replaceAll("'", "''");
        var description = req.body.description.replaceAll("'", "''");
        var imgUrl = req.body.imgUrl || "";
        var link = req.body.link || "";
        var startDate = req.body.startDate;
        var endDate = req.body.endDate;

        var token = req.body.token;

        if(token !== TOKEN){
            return res.send({ "error": "Invalid token." });
        }

        if (!title || !startDate) {
            return res.send({ "error": "Title or Start date is missing" });
        }

        var query = "select * from add_notification('" + title + "','" + description + "','" + imgUrl
            + "','" + link
            + "','" + startDate
            + "','" + endDate
            + "') as result;";

        db.query(query, (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                // after adding to the database send notification to devices using firebase
                var notificationData = {
                    "title": title,
                    "body": description,
                    "sound": "default",
                    "click_action": "puwifi_notification"
                }
                request
                    .post(process.env.FIREBASE_URL)
                    .send({ to: "/topics/puwifi", priority: "high", notification: notificationData })
                    .set("Content-Type", "application/json")
                    .set("Authorization", process.env.FIREBASE_KEY)
                    .end((err, res) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Notification sent!!");
                        }
                    });
                return res.send(result[0].result);
            }
        });
    });

    return router;
};
