const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'edgardomartinez534@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelacionEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'edgardomartinez534@hotmail.com',
        subject: 'Adios fue un gusto tenerte a bordo.',
        text: `${name} Comentamos cualos fueron los motivos de tu salida?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelacionEmail
}