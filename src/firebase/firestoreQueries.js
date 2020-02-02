import { db } from './utils';
let currentUser = null;

const analyzes = db.collection('analyzes');

const Analyzes = {
  create: async predicted =>
    await analyzes.add({
      ...predicted,
      owner: currentUser.id,
      date: new Date(),
    }),
  getOne: async id => await (await analyzes.doc(id).get()).data(),
  getAll: async () => {
    return await (
      await analyzes
        .where('owner', '==', currentUser.id)
        .orderBy('date', 'desc')
        .get()
    ).docs.map(doc => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        date: data.date.toDate(),
      };
    });
  },
};

const orders = db.collection('orders');

const Orders = {
  create: async (name, phone, amount) =>
    await orders.add({
      name,
      phone,
      amount,
      date: new Date(),
    }),
};

export default {
  setCurrentUser: _currentUser => {
    currentUser = _currentUser;
  },
  Analyzes,
  Orders,
};
