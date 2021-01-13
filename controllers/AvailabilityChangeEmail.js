// requiring nodemailer
const nodemailer = require('nodemailer');

function sendAvailabilityChangeMail(user, pass, to, item, alertType){
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
        const mailOptions = {
            from: 'stockify.notifications@gmail.com', // sender address
            to: to, // list of receivers
            subject: '[Stockify] Alert: Your saved product availability has changed!', // Subject line
            html: `<p>Your product ${item.name} is now ${item.status}!</p>` // plain text body
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
            console.log(err)
        else 
            console.log(info);
    });
}

module.exports = {sendAvailabilityChangeMail};