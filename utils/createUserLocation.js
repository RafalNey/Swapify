import { addDoc } from "firebase/firestore"
import { userLocationRef } from "../firebase"


export const createUserLocation = (location, email) => {
    addDoc(userLocationRef, {
        email: email,
        userLocation: location
    })
}