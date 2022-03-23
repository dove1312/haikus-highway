import { useState , useEffect } from "react";
import WordList from "./WordList";
import DisplayHaiku from "./DisplayHaiku";
import SaveYourHaiku from "./SaveYourHaiku";

const WordGenerator = (props) => {

    //state containing the selected words for Haiku
    const [currentHaiku, setCurrentHaiku] = useState([[], [], []]);
    //state containing total current syllables used as user selects
    const [currentSyllables, setCurrentSyllables] = useState(0);
    //allowed syllables will be used to display the # of syllables left on the side for user help 
    const [allowedSyllables, setAllowedSyllables] = useState(17);
    //track 'score' of each word selected to use as the key value to pass down to displayHaiku
    const [id, setId]= useState(0);

    //track total number of syllables used as each word is added to the currentHaiku array
    const trackingSyllableCount = (numOfSyllables) => {
        setCurrentSyllables(currentSyllables + numOfSyllables);
    }

    //once currentSyllables is being tracked, figure out which line to push the incoming object to (object holding both the word and the key)
    const whichLine = (wordParam, idParam) => {
        if (currentSyllables < 5) {
            let placeholder = currentHaiku;
            placeholder[0].push({ word:wordParam, key:idParam });
            setCurrentHaiku(placeholder);
        } else if (currentSyllables < 12 && currentSyllables >= 5) {
            let placeholder = currentHaiku;
            placeholder[1].push({ word: wordParam, key:idParam });
            setCurrentHaiku(placeholder);
        } else if (currentSyllables >= 12) {
            let placeholder = currentHaiku;
            placeholder[2].push({ word:wordParam, key:idParam });
            setCurrentHaiku(placeholder);
        } else {
            console.log('too many syllables');
        }
        console.log(currentHaiku);

    }

    // console.log(`current syllables is ${currentSyllables}`);

    //once current syllables has rendered, triggers setAllowedSyllables to a base # of available syllables (depending on line of poem), and subtracting current syllables from total amount 
    useEffect(()=> {
        if (currentSyllables < 5) {
            let syllablesLeft = 5 - currentSyllables;
            setAllowedSyllables(syllablesLeft);
        } else if (currentSyllables >= 5 && currentSyllables < 12) {
            let syllablesLeft = 12 - currentSyllables;
            setAllowedSyllables(syllablesLeft);
        } else if (currentSyllables >= 12) {
            let syllablesLeft = 17 - currentSyllables;
            setAllowedSyllables(syllablesLeft);
        }
        // console.log(`allowed syllables is ${allowedSyllables}`);
    }, [currentSyllables]);


    return (
        <div className="wordBox">
            <h2>words</h2>
            <DisplayHaiku 
                currentHaiku={ currentHaiku }
                currentSyllables = { currentSyllables }
                id={id}
            />
            <p>you have {allowedSyllables} left for this line</p>
            <WordList 
                currentHaiku={ currentHaiku } 
                initialWord={ props.initialWord } 
                handleSyllables={ trackingSyllableCount } 
                handleHaikuWords={ whichLine } 
                currentSyllables= {currentSyllables}
                allowedSyllables = { allowedSyllables }
            />
            {
                currentSyllables === 17 ? <SaveYourHaiku /> : null
            }
        </div>
    )
}

export default WordGenerator;



