import { onSnapshot } from 'firebase/firestore';
import { query, where } from 'firebase/firestore';
import collectionRef from '../firebase';


const getItems = (category) => {
    let q = '';
    if (category==='All'|| category===undefined || category==='') {
        q = collectionRef;
    } else {
        q = query(collectionRef, where('category', '==', category))
    }
    return new Promise ((resolve, reject) => {
      onSnapshot(q, (snapshot) => {
      let itemsFromDb = [];
      snapshot.docs.forEach((doc) => {
        itemsFromDb.push({ ...doc.data(), id:doc.id});
      });
    resolve(itemsFromDb);
    })
    }).then((items) => {
      return items;
    })
};

export default getItems;







