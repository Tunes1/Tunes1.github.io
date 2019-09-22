let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ricardotuva21@gmail.com',
        pass: 'rt210698'
    }
})

let mailOptions = {
    from: 'Ricardo Tunes <ricardotuva21@gmail.com>',
    to: ''

}

console.log(document.Myform.action)