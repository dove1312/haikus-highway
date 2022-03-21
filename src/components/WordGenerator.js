import { useState } from "react";
import WordList from "./WordList";
import DisplayHaiku from "./DisplayHaiku";

const WordGenerator = (props) => {

    
    // to be replaced with a real function:
    const someSyllableFunction = (syllableInfo) => {
        console.log(syllableInfo);
        // probably State Stuff
        // ex) setCurrentSyllables(currentSyllables + syllableInfo)
    }
    // to be replaced with a real function:
    const someHaikuArrayFunction = (nextWord) => {
        // update with if current syllable = blahblahblah to push to [0]. [1], or [2]
        let tempArray = props.currentHaiku;
        tempArray.push(nextWord)
        props.updateHaiku(tempArray)
    }

    return (
        <div className="wordBox">
            <h2>words</h2>
            <DisplayHaiku currentHaiku={ props.currentHaiku } />
            <WordList currentHaiku={ props.currentHaiku } initialWord={ props.initialWord } handleSyllables={ someSyllableFunction } handleHaikuWords={ someHaikuArrayFunction } />
        </div>
    )
}

export default WordGenerator;