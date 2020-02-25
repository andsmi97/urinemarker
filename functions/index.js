const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const app = express();
const cors = require('cors')();
const {
  mailTransport,
  yandexEmail,
  gmailEmail,
} = require('./config/mailConfig');
app.use(cors);
app.use(require('./Routes'));

// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.

// Sends an email confirmation when a user orders kit.
exports.sendOrderEmail = functions.firestore
  .document('/orders/{uid}')
  .onCreate(async (snap, context) => {
    const val = snap.data();
    const mailOptions = {
      from: yandexEmail,
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
      console.log('send email');
    } catch (error) {
      console.error('There was an error while sending the email:', error);
    }
    return null;
  });

// Expose the API as a function
exports.api = functions.https.onRequest(app);
