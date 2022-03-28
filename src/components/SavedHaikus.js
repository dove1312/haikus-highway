import firebase from './firebase';
import HaikuReturn from "./HaikuReturn";
import { getDatabase, ref, onValue } from "firebase/database"
import { useState, useEffect } from "react";

const SavedHaikus = () => {

    const [haikuList, setHaikuList] = useState([])


    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {
            const newState = [];
            const data = response.val()
            for (let key in data) {
                newState.push({ key: key, info: data[key] })
            }
            setHaikuList(newState);
        })

    }, [])

    // console.log(haikuList);

    return (
        <main>
            <section className="savedHaikus">
                <div className='wrapper'>
                    <div className="haikus">
                        <h2>Saved Haikus</h2>
                        <ul className="haikuList">
                            {
                                haikuList[0]
                                    ? haikuList.map((haiku) => {
                                        return (
                                            <li key={haiku.key}>
                                                <HaikuReturn haikuArray={haiku.info} />
                                            </li>
                                        )
                                    })
                                    : null
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default SavedHaikus