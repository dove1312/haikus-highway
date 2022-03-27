import firebase from './firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

import { useState, useEffect } from 'react';


const SavedHaikus = () => {

    const [haikus, setHaikus]=useState([]);

    useEffect( ()=>{
        const database = getDatabase(firebase);
        const dbRef = ref(database)

        onValue(dbRef, (response) => {
            const newState=[];
            const data= response.val()
            for(let individual in data){
                newState.push(data[individual]);
            }
            setHaikus(newState);
        })
    },[])

    console.log(haikus);
    

    return (
        <>
        <h1>Haikus Go Here</h1>
        {
            haikus.map((individualHaiku)=>{
                console.log(individualHaiku);
                return(
                    <ul>
                        {
                            individualHaiku.map((word)=> {
                                return(
                                    <li>{word}</li>
                                )
                            })
                        }
                    </ul>
                )
            })
        }
        </>
    )
}

export default SavedHaikus