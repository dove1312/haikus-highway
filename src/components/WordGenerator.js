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


    //track total number of syllables used as each word is added to the currentHaiku array
    const trackingSyllableCount = (numOfSyllables) => {
        setCurrentSyllables(currentSyllables + numOfSyllables);
    }

    //once currentSyllables is being tracked, figure out which line to push the incoming word to 
    const whichLine = (wordParam) => {
        if (currentSyllables < 5) {
            let placeholder = currentHaiku;
            placeholder[0].push(wordParam);
            setCurrentHaiku(placeholder);
        } else if (currentSyllables < 12 && currentSyllables >= 5) {
            let placeholder = currentHaiku;
            placeholder[1].push(wordParam);
            setCurrentHaiku(placeholder);
        } else if (currentSyllables >= 12) {
            let placeholder = currentHaiku;
            placeholder[2].push(wordParam);
            setCurrentHaiku(placeholder);
        } else {
            console.log('too many syllables');
        }
        console.log(currentHaiku);

    }

    console.log(`current syllables is ${currentSyllables}`);

    //once current syllables has rendered, triggers setAllowedSyllables to a base # of available syllables (depending on line of poem), and subtracting current syllables from total amount 
    useEffect(()=> {
        if (currentSyllables <= 5) {
            let syllablesLeft = 5 - currentSyllables;
            setAllowedSyllables(syllablesLeft);
        } else if (currentSyllables > 5 && currentSyllables <= 12) {
            let syllablesLeft = 12 - currentSyllables;
            setAllowedSyllables(syllablesLeft);
        } else if (currentSyllables > 12) {
            let syllablesLeft = 17 - currentSyllables;
            setAllowedSyllables(syllablesLeft);
        }
        // console.log(`allowed syllables is ${allowedSyllables}`);
    }, [currentSyllables]);

    

    return (
        <div className="wordBox">
            <h2>words</h2>
            <DisplayHaiku currentHaiku={ currentHaiku } />
            <p>you have {allowedSyllables} left for this line</p>
            <WordList 
                currentHaiku={ currentHaiku } 
                initialWord={ props.initialWord } 
                handleSyllables={ trackingSyllableCount } 
                handleHaikuWords={ whichLine } 
                allowedSyllables = { allowedSyllables }
            />
            {
                currentSyllables === 17 ? <SaveYourHaiku /> : null
            }
        </div>
    )
}

export default WordGenerator;





    // const [haikuLines, setHaikuLines]= useState([
    //      [
    //           {
    //                word: "thunder",
    //                syllables: 4
    //           },
    //           {
    //                word: "flight",
    //                syllables: 1
    //           }
    //      ],
    //      [
    //           {
    //                word: "candy",
    //                syllables: 2
    //           },
    //           {
    //                word: "doggy",
    //                syllables: 2
    //           },
    //           {
    //                word: "lightning",
    //                syllables: 2
    //           }
    //      ],
    //      [
    //           // {
    //           //      word: "superstar",
    //           //      syllables: 2
    //           // },
    //           // {
    //           //      word: "goal",
    //           //      syllables: 2
    //           // },
    //           // {
    //           //      word: "celebrate",
    //           //      syllables: 1
    //           // }

    //      ]
    // ])



    // useEffect(()=>{
    //      let sum = 0;
    //      haikuLines.forEach((array) => {

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


    // const userWord = "cat";

    

 // // to be replaced with a real function:
    // const someHaikuArrayFunction = (nextWord) => {
    //     // update with if current syllable = blahblahblah to push to [0]. [1], or [2]
    //     let tempArray = currentHaiku;
    //     tempArray.push(nextWord)
    //     setCurrentHaiku(tempArray)
    //}

  




    // const calculateSyllables = ()=>{
    //      if (currentSyllables < 5){
    //           console.log('line 1 please');
    //      }
    //      else if(currentSyllables == 5){
    //           console.log('line 1 complete');
    //      }
    //      else if(currentSyllables > 5 && currentSyllables < 12){
    //           console.log('line 2 please');
    //      }
    //      else if (currentSyllables == 12){
    //           console.log('line 2 complete');
    //      }
    //      else if (currentSyllables > 12 && currentSyllables < 17){
    //           console.log('line 3 please');
    //      } else if (currentSyllables == 17) {
    //           console.log('done-zo')
    //      } else {
    //           console.log('too many syllables');
    //      }
    // }

    // calculateSyllables();




