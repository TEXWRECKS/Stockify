// requiring nodemailer
const nodemailer = require('nodemailer');

function sendAccountCreationMail(to, item){
    // transport service to send emails for nodemailer
    const transporter = nodemailer.createTransport({
        // using gmail as transport service
        service: 'gmail',
        // auth object specifying email and password of gmail, which...
        // ... allows nodemailer to login and send email using gmail account
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    });

    // email details
    const mailOptions = {
        from: 'stockify.notifications@gmail.com', // sender address
        to: to, // list of receivers
        subject: '[Stockify] Alert: Stockify Account Creation', // Subject line
        html: `<p>Welcome to Stockify!  You have successfully created a Stockify account.
        <br></br>
        Be sure to find desired Amazon products and save them to your Saved Products page to take advantage of instant notifications on price and or availability changes!</p>` // plain text body
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
            console.log(err)
        else 
            console.log(info);
    });
}

module.exports = {sendAccountCreationMail};
