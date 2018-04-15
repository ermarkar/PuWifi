var path = require("path");
const db = require("../db/db-connect");

module.exports = function (router) {
    /**
     * Get the forms - surveys/registration/polls
     */
    router.get("/forms", (req, res) => {
        var formType = req.query.formType || 0;
        var deviceId = req.query.deviceId;
        var query = "select * from get_forms(" + formType + ",'" + deviceId + "') as forms;";

        db.query(query, (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send({ data: result[0].forms });
            }
        });
    });

    return router;
};