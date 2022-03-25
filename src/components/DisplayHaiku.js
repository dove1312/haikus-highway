import {useState} from 'react';
import HaikuReturn from './HaikuReturn';


const DisplayHaiku = (props) => {
    //define the variables to hold syllables and haiku to be able to map through and display
    const syllables = props.currentSyllables;
    const haikuLines = props.currentHaiku;

    //defining variables for each of the haiku lines as they update, so when updating one line with the 'remove' button, we can maintain the other 2 lines 
    const line1 = haikuLines[0];
    const line2 = haikuLines[1];
    const line3 = haikuLines[2]

    const handleClick= ()=> {        
        line1.pop();
        props.removeFromHaiku(line1, line2, line3);
    }

    const handleClick2 = ()=> {
        line2.pop();
        props.removeFromHaiku(line1,line2, line3);
    }

    const handleClick3 = () => {
        line3.pop();
        props.removeFromHaiku(line1, line2, line3);
    }

    return(
        // <>
        //     <h2>Here's Your Haiku!</h2>
        //     <ul 
        //         className="line1"
        //         style= {syllables >=5 ? {color:"grey"} : {color:"black"}}
        //     >
        //         {haikuLines[0].map((word)=>{
        //             return(
        //             <li key={word.key}>{word.word}</li>
        //             )
        //         })
        //         }
        //         <button
        //             style={syllables <= 5 ? {display:"block"} : {display:"none"}}
        //             onClick={handleClick} >REMOVE</button>
                
        //     </ul>
        //     <ul
        //         className="line2"
        //         style={syllables >= 12 ? { color: "grey" } : { color: "black" }}
        //     >
        //         {haikuLines[1].map((word) => {
        //             return(
        //             <li key={word.key}>{word.word}</li>
        //             )
        //         })
        //         }
        //         <button
        //             style={syllables > 5 && syllables <=12 ? {display:"block"} : {display:"none"}}
        //             onClick={handleClick2} >REMOVE</button>
        //     </ul>
        //     <ul
        //         className="line3"
        //         style={syllables == 17 ? { color: "grey" } : { color: "black" }}
        //     >
        //         {haikuLines[2].map((word) => {
        //             return(
        //             <li key={word.key}>{word.word}</li>
        //             )
        //         })
        //         }
        //     </ul>
        //     <button 
        //         style={syllables > 12 ? { display: "block" } : { display: "none" }}
        //         onClick={handleClick}>Not happy with a word? get rid of it</button>
        // </>
        
        <HaikuReturn syllables={ syllables } haikuArray={ haikuLines } handleClick= {handleClick} handleClick2={handleClick2} handleClick3= {handleClick3}/>
    )
}

export default DisplayHaiku

//create a button that will display for each of the lines
    //that button must recognize the last object of the array (haikuLine) and .pop() to remove 
    //create a turnery that is disappears when the syllables is reached 
    //need to trigger a rerender of the <UL> to display uploaded function
    //need to trigger a change of currentSyllables

    //when that button is clicked, we may need to trigger another API call based on the value of object.word 



    // const wordToRemove = event.target.previousElementSibling.outerText;
        // line1.find(()=>{ 
        //     console.log(wordToRemove)
        //     line1.pop(wordToRemove);
        // })