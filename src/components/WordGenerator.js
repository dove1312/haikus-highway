import WordList from "./WordList";

const WordGenerator = (props) => {
    // temporary until State is added:
    let currentHaiku = [["cat"]];

    
    // to be replaced with a real function:
    const someSyllableFunction = (syllableInfo) => {
        console.log(syllableInfo);
        // probably State Stuff
        // ex) setCurrentSyllables(currentSyllables + syllableInfo)
    }
    // to be replaced with a real function:
    const someHaikuArrayFunction = (nextWord) => {
        console.log(nextWord);
        // probably State Stuff
    }

    return (
        <div className="wordBox">
            <h2>words</h2>
            <WordList initialWord={ props.initialWord } handleSyllables={ someSyllableFunction } handleHaikuWords={ someHaikuArrayFunction } />
        </div>
    )
}

export default WordGenerator;