import { onSnapshot } from 'firebase/firestore';
import { query, where } from 'firebase/firestore';
import collectionRef from '../firebase';

// .collection("items")
// .orderBy("posted_at", "desc")
const getMostRecentItems = () => {

return new Promise ((resolve, reject) => {
    onSnapshot(collectionRef, (snapshot) => {
    let itemsFromDb = [];
    snapshot.docs.forEach((doc) => {
      itemsFromDb.push({ ...doc.data(), id:doc.id});
    });
  resolve(itemsFromDb);
  })
  }).then((items) => {
    return items;
  })
}

export default getMostRecentItems;