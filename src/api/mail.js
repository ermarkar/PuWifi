var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'mail.array151.com',
    port:587,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

module.exports = function (router) {
    /**
     * To send mail
     */
    router.post("/send", (req, res) => {
        console.log("Mail", req.body);
        var mailContent = ` Name : ${req.body.name}
        Email : ${req.body.email},
        Message ;${req.body.message}
        `;
        mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: 'Contact from PuWifiWeb',
            text: mailContent
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