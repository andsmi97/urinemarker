const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const app = express();
const cors = require('cors')();
const nodemailer = require('nodemailer');
app.use(cors);
app.use(require('./Routes'));

// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Sends an email confirmation when a user orders kit.
exports.sendEmailConfirmation = functions.database
  .ref('/orders/{uid}')
  .onWrite(async change => {
    const snapshot = change.after;
    const val = snapshot.val();

    const mailOptions = {
      from: gmailEmail,
      to: gmailEmail,
      subject: 'Новая заявка',
      text: `
      C сайта пришла новая заявка на набор:
      Имя: ${val.name}
      Телефон: ${val.phone}
      Количество: ${val.amount}
      `,
    };

    try {
      await mailTransport.sendMail(mailOptions);
    } catch (error) {
      console.error('There was an error while sending the email:', error);
    }
    return null;
  });

// Expose the API as a function
exports.api = functions.https.onRequest(app);
