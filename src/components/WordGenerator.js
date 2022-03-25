import { useState, useEffect } from "react";
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

    //track total number of syllables used as each word is added to the currentHaiku array
    const trackingSyllableCount = (numOfSyllables) => {
        setCurrentSyllables(currentSyllables + numOfSyllables);
    }

    //once currentSyllables is being tracked, figure out which line to push the incoming object to (object holding both the word and the key)
    const whichLine = (wordParam, syllablesParam, idParam) => {
        //when the first word is received, the idParam has not yet been defined, so set the first value of "key" to be the currentSyllables value on initialization (which is 0)
        if (currentSyllables < 5) {
            let placeholder = currentHaiku;
            placeholder[0].push({ word:wordParam, key:idParam, syllables:syllablesParam  });
            setCurrentHaiku(placeholder);
            console.log(currentHaiku);
        } else if (currentSyllables < 12 && currentSyllables >= 5) {
            let placeholder = currentHaiku;
            placeholder[1].push({ word: wordParam, key: idParam, syllables: syllablesParam });
            setCurrentHaiku(placeholder);
        } else if (currentSyllables >= 12) {
            let placeholder = currentHaiku;
            placeholder[2].push({ word: wordParam, key: idParam, syllables: syllablesParam });
            setCurrentHaiku(placeholder);
        } else {
            console.log('too many syllables');
        }
    }

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


    const removeFromHaiku = (haikuParam, haikuParam2, haikuParam3)=>{
        setCurrentHaiku([[...haikuParam], [...haikuParam2],[...haikuParam3]]);
        // now need to figure out how to setSyllableCount-
            //maybe look at whichLine to see if we get the syllables to be included here as well - THEN we can setCurrentSYllables here to loop through all the words and add up the syllables

        console.log(currentHaiku);
        let sum = 0
        currentHaiku.forEach((array) => {
            for (let i = 0; i < array.length; i++) {
                const syllables = array[i].syllables;
                sum += syllables
                // console.log(syllables, sum);
            }
            console.log(`the sum is ${sum}`);
            setCurrentSyllables(sum);
        })
    }

    console.log(`current syllables is ${currentSyllables}`);

    //set currentWord to last word in the array - look at chosenWord- whenever chosenWord changes, it automatically does the API call - 
        //so we may need another new state (possibly in word generator, or that plus displayHaiku) - a state for previous word
            //word list- we can make a useEffect - props.previousWord ? MAYBE
            //so whenever previous word changes, set chosenWord to previous word (setPreviousWord(props.previousWords ))

//    console.log("what is being passed back down:");
//    console.log(currentHaiku);

    return (
        <div className="wordBox">
            <DisplayHaiku 
                currentHaiku={ currentHaiku }
                currentSyllables = { currentSyllables }
                removeFromHaiku = { removeFromHaiku }
            />
            {allowedSyllables != 0 ? <p>you have {allowedSyllables} syllables left for this line</p>: null}
            <WordList 
                currentHaiku={ currentHaiku } 
                initialWord={ props.initialWord } 
                handleSyllables={ trackingSyllableCount } 
                handleHaikuWords={ whichLine } 
                allowedSyllables = { allowedSyllables }
                currentSyllables={ currentSyllables }
            />
            {
                currentSyllables === 17 ? <SaveYourHaiku /> : null
            }
        </div>
    )
}

export default WordGenerator;








     // useEffect(()=>{
    //      let sum = 0;
    //      currentHaiku.forEach((array) => {

    //           // let totalSum = 0;
    //           for (let i = 0; i < array.length; i++) {
    //                const syllables = array[i].syllables;
    //                sum += syllables
    //                // console.log(syllables, sum);
    //           }

    //           setCurrentSyllables(currentSyllables + sum);

    //      })

    //      // // console.log(currentSyllables);
    //      // setAllowedSyllables(allowedSyllables - currentSyllables);
    //      // console.log(currentSyllables);
    // },[haikuLines]);