import { onSnapshot } from 'firebase/firestore';
import { query, where, orderBy } from 'firebase/firestore';
import collectionRef from '../firebase';

const getItems = (category, sortBy, user) => {
  let sortByArray = sortBy.split(' ');
  let q = '';

  if (user) {
    q = query(collectionRef, where('username', '==', `${user}`));
  } else if (category === 'All' || category === undefined || category === '') {
    q = query(collectionRef, orderBy(sortByArray[0], sortByArray[1]));
  } else {
    q = query(
      collectionRef,
      where('category', '==', category),
      orderBy(sortByArray[0], sortByArray[1])
    );
  }

  return new Promise((resolve, reject) => {
    onSnapshot(q, (snapshot) => {
      let itemsFromDb = [];
      snapshot.docs.forEach((doc) => {
        itemsFromDb.push({ ...doc.data(), id: doc.id });
      });
      resolve(itemsFromDb);
    });
  }).then((items) => {
    return items;
  });
};

export default getItems;
