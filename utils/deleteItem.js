import { removeAssetsFromAlbumAsync } from 'expo-media-library';
import { deleteDoc, doc } from 'firebase/firestore';
import { connectStorageEmulator } from 'firebase/storage';
import { useState } from 'react';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { database } from '../firebase'; 

const deleteItem = ({id}) => {
    console.log(id)
    const docRef = doc(database, 'test', id);
    deleteDoc(docRef)
      .then(() => {
          console.log('item', id, 'has been deleted')   
      })
      .catch((err) => {
        console.log('There\'s an error!', err)
      });
}

export default deleteItem; 