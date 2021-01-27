const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    const emailMessage = {
        to: email,
        from: 'tarkeshian@yahoo.co.uk',
        subject: 'Thanks foe joining in',
        text: `Welcome to the app, ${name}`
    }
    sgMail.send(emailMessage).then(() => { }, error => {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    });
}

const cancellationEmail = (email, name) => {
    const emailMessage = {
        to: email,
        from: 'tarkeshian@yahoo.co.uk',
        subject: 'Goodbye!',
        text: `See you around, ${name}`
    }
    sgMail.send(emailMessage).then(() => { }, error => {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    });
}


// const email = {
//     to: 'ardeshir.tarkeshian@rethinklegal.com',
//     from: 'tarkeshian@yahoo.co.uk',
//     subject: 'This is from node',
//     text: 'I hope this one gets to you!'
// }
// sgMail.send(email).then(() => {}, error => {
//     console.error(error);
 
//     if (error.response) {
//       console.error(error.response.body)
//     }
// });

module.exports = {
    sendWelcomeEmail,
    cancellationEmail
}