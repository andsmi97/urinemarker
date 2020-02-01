const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const app = express();
const cors = require('cors')();

app.use(cors);
app.use(require('./Routes'));

// Expose the API as a function
exports.api = functions.https.onRequest(app);
