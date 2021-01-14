// requiring nodemailer
const nodemailer = require('nodemailer');

function sendDeleteProductMail(to, item){
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
        subject: '[Stockify] Alert: Saved Product Removed', // Subject line
        html: `<p>You have successfully removed product ${item.name} from your Saved Products list.</p>` // plain text body
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
            console.log(err)
        else 
            console.log(info);
    });
}

module.exports = {sendDeleteProductMail};