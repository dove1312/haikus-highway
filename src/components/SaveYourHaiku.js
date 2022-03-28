import firebase from './firebase';
import { getDatabase, ref, push } from 'firebase/database';
import { useState } from 'react';

const SaveYourHaiku = (props)=>{
     console.log(props.currentHaiku);

     // const [wordsOnly, setWordsOnly]=useState([]);
     // const test = ["happy", "sad", "life", "homework", "sucks", "i","hate", "errors"]

     // const line1 = props.currentHaiku[0];
     // const line2= props.currentHaiku[1];
     // const line3=props.currentHaiku[2];

     // line1.map((word)=>{
     //      setWordsOnly(wordsOnly.push(word.word))
     // })
     // line2.map((word)=> {
     //      setWordsOnly(wordsOnly.push(word.word))
     // })
     // line3.map((word)=>{
     //      setWordsOnly(wordsOnly.push(word.word));
     // })

     // console.log(wordsOnly);
     //functionality for calling firebase included here
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