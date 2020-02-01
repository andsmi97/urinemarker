const admin = require('firebase-admin');
const db = admin.firestore();

const create = async (req, res) => {
  try {
    const { LEU, KET, NIT, URO, BIL, PRO, GLU, SG, BLD, pH } = req.body;
    const owner = req.user.user_id;
    const analysis = { LEU, KET, NIT, URO, BIL, PRO, GLU, SG, BLD, pH, owner };
    const docRef = await db.collection('analyzes').add(analysis);
    console.log('Document written with ID: ', docRef.id);
    return res.sendStatus(201).json(docRef);
  } catch (e) {
    console.log(e);
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
    console.log(results);
    return res.status(200).json(results);
  } catch (e) {
    console.log(e);
    return res.status(403);
  }
};

const one = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = req.user.user_id;
    const analysis = await db
      .collection('notes')
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

module.exports = {
  create,
  all,
  one,
};
