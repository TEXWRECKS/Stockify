// requiring nodemailer
const nodemailer = require('nodemailer');

// transport service to send emails for nodemailer
const transporter = nodemailer.createTransport({
    // using gmail as transport service
    service: 'gmail',
    // auth object specifying email and password of gmail, which...
    // ... allows nodemailer to login and send email using gmail account
    auth: {
        user: 'stockify.notifications@gmail.com',
        pass: 'Jeff_Winger_1234'
    }
});

// email details
const mailOptions = {
    from: 'sender@email.com', // sender address
    to: 'to@email.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your HTML here</p>' // plain text body
};

// Before sending email using gmail, you have to allow non-secure apps to access gmail...
// ... You can do this by going to your gmail settings here https://myaccount.google.com/lesssecureapps ...
// ... and turning "Allow less secure apps: ON"

// Sending the email by using the sendMail method in the transporter object created above
// ... Taking in two arguments (mailOptions, and a callback function)
// ... The callback function will be called when the mail is either sent successfully, or if an error occurred
transporter.sendMail(mailOptions, (err, info) => {
    if(err)
        console.log(err)
    else
        console.log(info);
});