const functions = require('firebase-functions');
const {
  mailTransport,
  yandexEmail,
  gmailEmail,
} = require('../config/mailConfig');

const onCreateOrder = functions.firestore
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

const onSubscribe = functions.firestore
  .document('/subscribers/{uid}')
  .onCreate(async (snap, context) => {
    const val = snap.data();
    console.log(val);
    const mailOptions = {
      from: yandexEmail,
      to: val.email,
      subject: 'Добро пожаловать в U-Box',
      text: `
        Вы получили это письмо, потому что оставили свои контакты на сайте u-box.io
        Если вы не хотите получать от нас сообщение вы можете описаться от них по ссылке
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

const onUnsubscribe = functions.firestore
  .document('/subscribers/{uid}')
  .onUpdate(async (snap, context) => {
    const val = snap.data();
    const mailOptions = {
      from: yandexEmail,
      to: val.email,
      subject: 'Нам жаль что Вы уходите',
      text: `
       Теперь Вы больше не будте получать от нас сообщения, но вы всегда можете к нам вернуться!
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

module.exports = { onCreateOrder, onSubscribe, onUnsubscribe };
