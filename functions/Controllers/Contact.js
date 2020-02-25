const admin = require('firebase-admin');
const db = admin.firestore();
const { mailTransport, yandexEmail } = require('../config/mailConfig');
const subscirbe = async (req, res) => {
  try {
    const { email } = req.body;
    const subscriber = { email, active: true };
    const docRef = await db.collection('subscribers').add(subscriber);
    return res.sendStatus(201).json(docRef);
  } catch (e) {
    console.error(e);
    return res.status(403);
  }
};

const unsubscribe = async (req, res) => {
  try {
    const id = req.params.id;
    const subscriber = db.collection('subscribers').doc(id);
    const updated = await subscriber.update({ active: false });
    return res.status(200).json(updated);
  } catch (e) {
    console.error(e);
    return res.status(403);
  }
};

const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const docMessage = { name, email, message };
    await db.collection('messages').add(docMessage);
    const mailOptions = {
      from: yandexEmail,
      to: yandexEmail,
      subject: 'Сообщение с сайта',
      text: `
      Имя: ${name}
      Email: ${email}
      Сообщение: ${message}
      `,
    };
    await mailTransport.sendMail(mailOptions);
    console.log('email sent');
    return res.sendStatus(200);
  } catch (e) {
    console.error('There was an error while sending the email:', error);
    return res.sendStatus(403);
  }
};

module.exports = {
  subscirbe,
  unsubscribe,
  sendMessage,
};
