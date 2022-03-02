import { getDocs } from "firebase/firestore"
import { userLocationRef } from "./firebase"


export const getLocation = (userEmail) => {
    return getDocs(userLocationRef)
    .then((snapshot) => {
        let users = []
        snapshot.docs.forEach((doc) => {
            users.push({...doc.data(), id: doc.id})
        })
        const result = users.filter(user => user.email.toLowerCase() === userEmail)
        return result
    })
    
}