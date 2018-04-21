var path = require("path");
const db = require("../db/db-connect");

module.exports = function (router) {
    /**
     * Get polls
     */
    router.get("/polls", (req, res) => {
        var deviceId = req.query.deviceId;
        var query = "select * from get_polls('" + deviceId + "') as polls;";

        db.query(query, (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send({ data: result[0].polls });
            }
        });
    });

    /**
     * submit form handler
     */
    router.post("/pollsubmit", (req, res) => {
        var deviceId = req.body.deviceId;
        var pollId = req.body.pollId;
        var pollResponse = JSON.stringify(req.body.pollResponse);
        console.log(pollResponse)

        if (!deviceId || !pollId) {
            return res.send({ error: { message: "Required fields are missing." } });
        }
        var query = "select * from poll_submit('" + deviceId + "'," + pollId + ",'" + pollResponse + "') as result;";

        db.query(query, (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send({ data: result[0].result });
            }
        });
    });

    return router;
};