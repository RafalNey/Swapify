import { onSnapshot } from 'firebase/firestore';
import { query, where, orderBy } from 'firebase/firestore';
import usersColRef from '../firebase';

const getAverageStars = (username) => {
    console.log(username);
    // get relevant document by username in users collection

    // get the total_stars and total_swaps
    // total_stars / total_swaps
    // round up or down as needed
    // return this number
}

export default getAverageStars;