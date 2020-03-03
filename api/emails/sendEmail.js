const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let msg = {
  to: 'meakidrick@gmail.com',
  from: 'meakidrick@gmail.com',
  subject: 'Email not sent',
  text: `Email not sent. Please check user email.`,
  html: `Email not sent. Please check user email.`,
};

module.exports = msg;