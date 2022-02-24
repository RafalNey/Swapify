import app from '../../src/firebase.config';
import React, { useState, useEffect } from 'react';
import {  
    getFirestore, collection, onSnapshot
  } from 'firebase/firestore';

const Items = () => {
  const [ items, setItems ] = useState([]);
  const db = getFirestore();
  const collectionRef = collection(db, 'test');  
  useEffect(() => {
    const getItems = onSnapshot(collectionRef, (snapshot) => {
      let itemsFromDb = [];
      snapshot.docs.forEach((doc) => {
      itemsFromDb.push({ ...doc.data(), id:doc.id});
    });
    setItems(itemsFromDb);
  });
}, []);
  
  
    return (
        <div>
            <div style={{listStyleType:'none'}}>
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <img src={item.img} style={{height: '200px'}}></img>
                        </li>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Items;