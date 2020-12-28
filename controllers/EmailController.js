// requiring nodemailer
const nodemailer = require('nodemailer');

function sendMail(user, pass, to, item, alertType){
    // transport service to send emails for nodemailer
    const transporter = nodemailer.createTransport({
        // using gmail as transport service
        service: 'gmail',
        // auth object specifying email and password of gmail, which...
        // ... allows nodemailer to login and send email using gmail account
        auth: {
            user: user,
            pass: pass
        }
    });

    // email details
    if(alertType == "price"){
        const mailOptions = {
            from: 'stockify.notifications@gmail.com', // sender address
            to: to, // list of receivers
            subject: '[Stockify] Alert: Your Product is below your alert price!', // Subject line
            html: `<p>Your prduct ${item.name} is now ${item.price}!</p>` // plain text body
    }} else if(alertType == "availability") {
        const mailOptions = {
            from: 'stockify.notifications@gmail.com', // sender address
            to: to, // list of receivers
            subject: '[Stockify] Alert: Your Product is in Stock!', // Subject line
            html: `<p>Your prduct ${item.name} is now in stock!</p>` // plain text body
    }};

    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
}

module.exports = {sendMail};
