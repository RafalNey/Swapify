import { onSnapshot } from 'firebase/firestore';
import { query, where } from 'firebase/firestore';
import collectionRef from '../firebase';

//const q = query(collectionRef, where('category', '==', category))

// get all items from database
const getItems = (category) => {
    console.log(category, 'category')
    let q = '';
    if (category==='All'|| category===undefined) {
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
  //console.log('items from db ', itemsFromDb)
  resolve(itemsFromDb);
})
}).then((items) => {
    console.log(items)
    return items;
})
};

export default getItems;







