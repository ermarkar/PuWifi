var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER_FROM,
        pass: process.env.MAIL_PASSWORD
    }
});

module.exports = function (router) {
    /**
     * To send mail
     */
    router.post("/send", (req, res) => {
        var mailContent = ` <b>Name</b> : ${req.body.name} <br>
        <b>Email</b> : ${req.body.emailId}<br>
        <b>Message </b>:${req.body.message}
        `;
        mailOptions = {
            from: process.env.MAIL_USER_FROM,
            to: process.env.MAIL_USER_TO,
            subject: 'Contact from PuWifiWeb',
            html: mailContent
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.json({ error: "Unable to send", errorData: error })
            } else {
                res.json({ message: "Mail Sent!!" })
            }
        });

    });

    return router;
};