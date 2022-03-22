import { useState , useEffect } from "react";
import WordList from "./WordList";
import DisplayHaiku from "./DisplayHaiku";

const WordGenerator = (props) => {
    //props right now is JUST the initial word
    // console.log(props);

    const [currentHaiku, setCurrentHaiku] = useState([[], [], []]);

    const [currentSyllables, setCurrentSyllables] = useState(0);
    //allowed syllables will be used to display the # of syllables left on the side for user help 
    const [allowedSyllables, setAllowedSyllables] = useState(17);


    //once currentSyllables is being tracked, figure out which line to push the incoming word to 

    const whichLine = (wordParam) => {
        // console.log(wordParam);
        console.log('whichLine rendered')
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

    const trackingSyllableCount = (numOfSyllables) => {
        console.log('trackingSyllableCount rendered');
        setCurrentSyllables(currentSyllables + numOfSyllables);
        console.log(currentSyllables);
        //can we do a state setting here for allowed syllables? if current syllables is being tracked at this point? OR can we put it up inside whichLine
        
    }

    // const syllablesPerLine = () => {
    //     //this works, but need to know how many syllables allowed PER line for .filter method
    //     // setAllowedSyllables(allowedSyllables - numOfSyllables);
    //     if(currentSyllables <= 5){
    //         setAllowedSyllables(5);
    //         console.log(allowedSyllables);
    //     } else if(currentSyllables > 5 && currentSyllables <=12){
    //         setAllowedSyllables(7); 
    //         console.log(allowedSyllables);
    //     }else if (currentSyllables > 12 && currentSyllables <=17){
    //         setAllowedSyllables(5);
    //         console.log(allowedSyllables);
    //     } else {
    //         console.log('too many!');
    //     }         
    // }
    // syllablesPerLine();

    // const howManyLeft = (numOfSyllables)=> {
    //     if (currentSyllables <= 5) {
    //         setAllowedSyllables(allowedSyllables - numOfSyllables);
    //     } else if (currentSyllables > 5 && currentSyllables <= 12) {
    //         setAllowedSyllables(allowedSyllables - numOfSyllables);
    //     } else if (currentSyllables > 12 && currentSyllables <= 17) {
    //         console.log(allowedSyllables); setAllowedSyllables(allowedSyllables - numOfSyllables);
    //     } else {
    //         console.log('too many!');
    //     }
    // }

    

    return (
        <div className="wordBox">
            <h2>words</h2>
            <DisplayHaiku currentHaiku={ currentHaiku } />
            <WordList 
                currentHaiku={ currentHaiku } 
                initialWord={ props.initialWord } 
                handleSyllables={ trackingSyllableCount } 
                handleHaikuWords={ whichLine } 
                // allowedSyllables = {howManyLeft}
            />
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




