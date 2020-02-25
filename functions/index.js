const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const app = express();
const cors = require('cors')();
const firestoreFunctions = require('./firestoreFunctions');
app.use(cors);
app.use(require('./Routes'));

//firestore functions
exports.sendOrderEmail = firestoreFunctions.onCreateOrder;
exports.sendSubscribeEmail = firestoreFunctions.onSubscribe;
exports.sendUnsubscribeEmail = firestoreFunctions.onUnsubscribe;

// Expose the API as a function
exports.api = functions.https.onRequest(app);
