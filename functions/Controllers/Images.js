const formidable = require('formidable');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const upload = (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname, '../Uploads');
  form.keepExtensions = true;
  form.maxFieldsSize = 50 * 1024 * 1024; // 50 MB
  return form.parse(req, async (err, fields, files) => {
    const { image } = files;
    const { message } = fields;
    if (err) return res.sendStatus(403);
    if (image) {
      const dir = `./img/${message}`;

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }

      const outputFile = `./img/${message}/${new Date().toString()}.jpg`;

      //TODO: change to firestore
      // const imageLink = new Images({
      //   image: outputFile,
      //   message
      // });
      await imageLink.save();
      sharp(image.path)
        // .resize(700)
        .jpeg({ quality: 70 })
        .toFile(outputFile)
        .then(() => {
          fs.unlink(image.path, err => {
            if (err) console.error(err.toString());
          });
          return res.status(200).json({
            LEU: 0,
            BIL: 0,
            BLD: 0,
            GLU: 0,
            KET: 0,
            NIT: 0,
            PRO: 0,
            SG: 0,
            URO: 0,
            pH: 0,
          });
        })
        .catch(console.error);

      return res.sendStatus(200);
    }
  });
};

module.exports = {
  upload,
};
