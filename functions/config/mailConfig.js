const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const gmailEmail = functions.config().gmail.email;
const yandexEmail = functions.config().yandex.email;
const yandexPassword = functions.config().yandex.password;
const mailTransport = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: yandexEmail,
    pass: yandexPassword,
  },
});

module.exports = { mailTransport, yandexEmail, gmailEmail };
