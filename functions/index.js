// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const language = require("@google-cloud/language");
const client = new language.LanguageServiceClient();
const express = require("express");
const app = express();
const db = admin.firestore();
const cors = require("cors")();

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
const authenticate = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    res.status(403).send("Unauthorized");
    return;
  }
  const idToken = req.headers.authorization.split("Bearer ")[1];
  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (e) {
    res.status(403).send("Unauthorized");
    return;
  }
};

app.use(cors);
app.use(authenticate);

app.get("/", async (req, res) => {
  console.log("test here");
  return res.status(200).json("hello world");
});

app.get("/analyzes/:analysis", authenticate, async (req, res) => {
  try {
    const analysisId = req.params.analysis;
    const userId = req.user.user_id;
    const snapshot = await db
      .collection("analyzes")
      .doc(analysisId)
      .get();
    if (!snapshot.data()) {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: `analysis '${analysisId}' not found`
      });
    }
    if (snapshot.data().owner !== userId) {
      return res.status(403).json({
        errorCode: 403,
        errorMessage: `Access denied`
      });
    }
    return res
      .set("Cache-Control", "private, max-age=300")
      .status(200)
      .json(snapshot.data());
  } catch (error) {
    return res.status(500).json(error);
  }
});

// returns every analysis of user
app.get("/analyzes", authenticate, async (req, res) => {
  try {
    const userId = req.user.user_id;

    // db.collection("analyzes")
    //   .where("owner", "==", userid)
    //   .get()
    //   .then(function(querySnapshot) {
    //     return res.status(200).json(
    //       querySnapshot
    //       // .map(function(doc) {
    //       //   // doc.data() is never undefined for query doc snapshots
    //       //   // console.log(doc.id, " => ", doc.data());
    //       //   doc.data();
    //       // })
    //     );
    //   })
    //   .catch(function(error) {
    //     res.status(500).json(error);
    //     console.log("Error getting documents: ", error);
    //   });

    // const querySnapshot = await db
    //   .collection("analyzes")
    //   .where("owner", "==", userId)
    //   .get();

    let analyzesRef = db.collection("analyzes");
    let query = analyzesRef
      .where("owner", "==", userid)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return res.status(200).json("Empty");
        }
        console.log(snapshot);
        console.log('snapshot data', snapshot.data());
        console.log('snapshot doc', snapshot.doc());
        console.log('snapshot docs', snapshot._docs());
        console.log('snapshot mapped',snapshot.map(doc=>doc))
        return res.status(200).json(
          snapshot.map(doc => {
            doc.data();
          })
        );
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });

    // console.log(await querySnapshot.data());
    // return res.status(200).json(querySnapshot.data());
    // const analyzesOfUser = querySnapshot.map(doc => {
    //   doc.data()
    //   // id: doc.id
    // });

    // return res.status(200).json(analyzesOfUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json("shit happend");
  }
});

// create note
app.post("/analysis", authenticate, async (req, res) => {
  try {
    const userId = req.user.user_id;
    const { type, title, body, color, deadline, tags, priority } = req.body;

    const analysis = {
      type,
      title,
      body,
      color,
      deadline,
      tags,
      priority,
      owner: userId
    };

    const docRef = await db.collection("analyzes").add(analysis);
    return res.status(200).json(docRef);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//removes note from DB
app.delete("/analyzes/:analysisId", authenticate, async (req, res) => {
  try {
    const analysisId = req.params.analysisId;
    const userId = req.user.user_id;
    const snapshot = await db
      .collection("analyzes")
      .doc(analysisId)
      .get();
    if (!snapshot.data()) {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: `analysis '${analysisId}' not found`
      });
    }
    if (snapshot.data().owner !== userId) {
      return res.status(403).json({
        errorCode: 403,
        errorMessage: `Access denied`
      });
    }
    const deleted = await db
      .collection("analyzes")
      .doc(analysisId)
      .delete();
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json(error);
  }
});

////Update note by id, should update only given fields;
app.post("/analyzes/:analysisId", authenticate, async (req, res) => {
  try {
    const analysisId = req.params.analysisId;
    const userId = req.user.user_id;
    const snapshot = await db
      .collection("analyzes")
      .doc(analysisId)
      .get();

    if (!snapshot.data()) {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: `note '${noteId}' not found`
      });
    }

    if (snapshot.data().owner !== userId) {
      return res.status(403).json({
        errorCode: 403,
        errorMessage: `Access denied`
      });
    }

    await db
      .collection("analyzes")
      .doc(analysisId)
      .update(req.body)
      .then(() => {
        return res.status(500).json(error);
      });
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Expose the API as a function
exports.api = functions.https.onRequest(app);
