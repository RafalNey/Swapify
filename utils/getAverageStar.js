import { onSnapshot } from 'firebase/firestore';
import { query, where, orderBy, doc } from 'firebase/firestore';
import { usersColRef } from '../firebase';
import { database } from '../firebase';

const getAverageStars = (username) => {
    //console.log(username);
    // get relevant document by username in users collection

    // get the total_stars and total_swaps
    // total_stars / total_swaps
    // round up or down as needed
    // return this number

    let q = query(usersColRef, where('username', '==', username));
    //console.log('before ')
    return new Promise((resolve, reject) => {
      onSnapshot(q, (snapshot) => {
        let itemsFromDb = [];
        snapshot.docs.forEach((doc) => {
          itemsFromDb.push({ ...doc.data(), id: doc.id });
        });
        resolve(itemsFromDb[0]);
      });
    }).then((userObj) => {
        let averageStars = 0
        if (userObj.total_stars === 0 || userObj.total_swaps === 0) {
            averageStars = 0;
        } else {
          averageStars = userObj.total_stars / userObj.total_swaps;
        }
        return Math.round(averageStars * 10) / 10;
    });
}

export default getAverageStars;
