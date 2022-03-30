import firebase from './firebase';
import { getDatabase, ref, push } from 'firebase/database';
import { useState } from 'react';

const SaveYourHaiku = (props)=>{

     const [saveButton, setSaveButton] = useState("Save Your Haiku");
     const database = getDatabase(firebase);
     const dbRef = ref(database);
     

     const handleClick = ()=> {
          push(dbRef, props.currentHaiku);
          setSaveButton("Saved");
     }



     return(
          <div className="buttonContainer">
               <button
               onClick= {handleClick} className="saveButton">{saveButton}</button>
          </div>
     )     
}

export default SaveYourHaiku;