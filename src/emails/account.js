const sgMail=require('@sendgrid/mail')

//const sendgridAPIKey='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'
//sgMail.setApiKey(sendgridAPIKey)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'proraghavendra@gmail.com',
        subject:'Thanks for joining in',
        text:`Welcome to the App,${name},let me know anything`,
        html:'<h1>Hello00000000</h1>'
    })
}

const sendCancellationEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'proraghavendra@gmail.com',
        subject:'sorry to see u go',
        text:`good vye ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}


// sgMail.send({
//     to:'proraghavendra@gmail.com',
//     from:'proraghavendra@gmail.com',
//     subject:'this is my first creation',
//     text:'i hope this one actually test mail'
// })