var path = require("path");

module.exports = function (router) {
    /**
     * Server the ad based on device, size and id
     */
    router.get("/getlatest", (req, res) => {
        var filePath = path.join(__dirname, "..", "..", process.env.STORAGE_NOTIFICATION_IMAGE,"notification.gif");
        res.sendFile(filePath);
    });

    return router;
};