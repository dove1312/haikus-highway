import firebase from './firebase';
import { getDatabase, ref, push } from 'firebase/database';
import { useState } from 'react';

const SaveYourHaiku = (props)=>{
     const database = getDatabase(firebase);
     const dbRef = ref(database);
     

     const handleClick = ()=> {
          const firebaseHaiku = push(dbRef, props.currentHaiku);
          console.log(dbRef);
          console.log(firebaseHaiku);
     }



     return(
          <div className="buttonContainer">
               <button
               onClick= {handleClick}>Save Your Haiku</button>
          </div>
     )     
}

export default SaveYourHaiku;