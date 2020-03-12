const admin = require('firebase-admin');
const db = admin.firestore();
// const storage = admin.storage();
const fetch = require('node-fetch');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
// const bucket = admin.storage().bucket();

// const { mailTranporter, yandexEmail } = require('../config/mailConfig');

// const spawn = require('child-process-promise').spawn;
// const path = require('path');
// const os = require('os');
// const fs = require('fs');

const create = async (req, res) => {
  try {
    const { LEU, KET, NIT, URO, BIL, PRO, GLU, SG, BLD, pH } = req.body;
    const owner = req.user.user_id;
    const analysis = { LEU, KET, NIT, URO, BIL, PRO, GLU, SG, BLD, pH, owner };
    const docRef = await db.collection('analyzes').add(analysis);
    return res.sendStatus(201).json(docRef);
  } catch (e) {
    console.error(e);
    return res.status(403);
  }
};

const all = async (req, res) => {
  try {
    const owner = req.user.user_id;
    const querySnapshot = await db
      .collection('analyzes')
      .where('owner', '==', owner)
      .get();
    const results = querySnapshot.map(doc => ({ ...doc.data(), id: doc.id }));
    return res.status(200).json(results);
  } catch (e) {
    console.error(e);
    return res.status(403);
  }
};

const one = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = req.user.user_id;
    const analysis = await db
      .collection('analyzes')
      .doc(id)
      .where('owner', '==', owner)
      .get()
      .data();

    if (!analysis) {
      return res.status(404).json({ errorMessage: 'not found' });
    }
    return res.status(200).json(analysis);
  } catch (e) {
    return res.status(403);
  }
};

const sendAnalysis = async (req, res) => {
  try {
    const { id } = req.params;
    // const owner = req.user.user_id;
    // const analysis = await db
    //   .collection('analyzes')
    //   .doc(id)
    //   .where('owner', '==', owner)
    //   .get()
    //   .data();

    // if (!analysis) {
    //   return res.status(404).json({ errorMessage: 'not found' });
    // }
    console.log('before storage');
    // const storageRef = storage.ref();
    // const gsReference = storage().refFromURL(
    //   'gs://u-box-f86ac.appspot.com/Analysys/Analysis.pdf'
    // );
    var pathReference = storage().ref('Analysys/Analysis.pdf');

    // // Points to 'images'
    // var imagesRef = storageRef.child('images');

    // // Points to 'images/space.jpg'
    // // Note that you can use variables to create child values
    // var fileName = 'space.jpg';
    // var spaceRef = imagesRef.child(fileName);
    // const spaceRef = storageRef.child('analysis/template.pdf');
    // console.log('spaceRef', gsReference);
    console.log('got reference');
    const url = await gsReference.getDownloadURL();
    console.log('url', url);
    const res = await fetch(url);
    console.log('res', res);
    const data = await res.arrayBuffer();
    console.log('data', data);

    // const pdfDoc = await PDFDocument.load(data);
    // // Embed the Helvetica font
    // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    // const textPosition = ({ x, y }) => ({
    //   x,
    //   y,
    //   size: 14,
    //   font: helveticaFont,
    //   color: rgb(0, 0, 0),
    // });
    // const pages = pdfDoc.getPages();
    // const firstPage = pages[0];
    // const date = '03.03.2020';

    // firstPage.drawText(String(date), textPosition({ x: 95, y: 613 }));
    // firstPage.drawText(String(URO), textPosition({ x: 345, y: 555 }));
    // firstPage.drawText(String(BLD), textPosition({ x: 345, y: 535 }));
    // firstPage.drawText(String(BIL), textPosition({ x: 345, y: 515 }));
    // firstPage.drawText(String(BIL), textPosition({ x: 345, y: 495 }));
    // firstPage.drawText(String(BIL), textPosition({ x: 345, y: 475 }));
    // firstPage.drawText(String(BIL), textPosition({ x: 345, y: 455 }));
    // firstPage.drawText(String(BIL), textPosition({ x: 345, y: 435 }));
    // firstPage.drawText(String(BIL), textPosition({ x: 345, y: 415 }));
    // firstPage.drawText(String(BIL), textPosition({ x: 345, y: 395 }));
    // firstPage.drawText(String(BIL), textPosition({ x: 345, y: 375 }));

    // const pdfBytes = await pdfDoc.save();

    // const storageRef = storage.ref();
    // const path = `analysis/${id}`;
    // const mountainImagesRef = storageRef.child(path);
    // await mountainImagesRef.put(file);

    // const bucket = admin.storage().bucket(fileBucket);
    // const tempFilePath = path.join(os.tmpdir(), fileName);
    // const metadata = {
    //   contentType: contentType,
    // };
    // await bucket.file(filePath).download({ destination: tempFilePath });
    // console.log('Image downloaded locally to', tempFilePath);
    // // Generate a thumbnail using ImageMagick.
    // await spawn('convert', [
    //   tempFilePath,
    //   '-thumbnail',
    //   '200x200>',
    //   tempFilePath,
    // ]);
    // console.log('Thumbnail created at', tempFilePath);
    // // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
    // const thumbFileName = `thumb_${fileName}`;
    // const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);
    // // Uploading the thumbnail.
    // await bucket.upload(tempFilePath, {
    //   destination: thumbFilePath,
    //   metadata: metadata,
    // });
    // // Once the thumbnail has been uploaded delete the local file to free up disk space.
    // return fs.unlinkSync(tempFilePath);

    // fs.writeFile('result.pdf', pdfBytes, function(err) {
    //   if (err) {
    //     return console.log(err);
    //   }

    //   const mailOptions = {
    //     from: yandexEmail,
    //     to: 'totalascension@gmail.com',
    //     subject: 'Результат анализа',
    //     text: '',
    //     attachments: [
    //       {
    //         path: `result.pdf`,
    //       },
    //     ],
    //   };

    //   return mailTranporter.sendMail(mailOptions, (error, info) => {
    //     if (!error) {
    //       console.log(`Email sent: ${info.response}`);
    //     } else {
    //       console.log(error);
    //     }
    //   });
    // });

    return res.status(200).json(data);
  } catch (e) {
    return res.status(403);
  }
};
module.exports = {
  create,
  all,
  one,
  sendAnalysis,
};
