import {useState} from 'react';
import HaikuReturn from './HaikuReturn';


const DisplayHaiku = (props) => {
    //define the variables to hold syllables and haiku to be able to map through and display
    const syllables = props.currentSyllables;
    const haikuLines = props.currentHaiku;

    console.log(haikuLines[0]);

    // const handleClick= ()=> {
        
    //     const line1 = haikuLines[0];
    //     line1.pop();
    //     console.log(haikuLines[0]);
    //     // const wordToRemove = event.target.previousElementSibling.outerText;
        
    //     // line1.find(()=>{ 
    //     //     console.log(wordToRemove)
    //     //     line1.pop(wordToRemove);
    //     // })
        
    // }

    return(
        // <div className='haikuBox'>
        //     <ul 
        //         className="line1 haikuLine"
        //         style= {syllables >=5 ? {color:"grey"} : {color:"black"}}
        //     >
        //         {
        //             liFromArray(haikuLines, 0)
        //         }
        //         {/* <button
        //             // style={syllables <= 5 ? {display:"block"} : {display:"none"}}
        //             onClick={handleClick} >REMOVE</button> */}
                
        //     </ul>
        //     <ul
        //         className="line2 haikuLine"
        //         style={syllables >= 12 ? { color: "grey" } : { color: "black" }}
        //     >
        //         {
        //             liFromArray(haikuLines, 1)
        //         }
        //     </ul>
        //     <ul
        //         className="line3 haikuLine"
        //         style={syllables == 17 ? { color: "grey" } : { color: "black" }}
        //     >
        //         {
        //             liFromArray(haikuLines, 2)
        //         }
        //     </ul>
        //     {/* <button onClick={handleClick}>Not happy with a word? get rid of it</button> */}
        // </div>
        <HaikuReturn syllables={ syllables } haikuArray={ haikuLines } />
    )
}

export default DisplayHaiku

//create a button that will display for each of the lines
    //that button must recognize the last object of the array (haikuLine) and .pop() to remove 
    //create a turnery that is disappears when the syllables is reached 
    //need to trigger a rerender of the <UL> to display uploaded function
    //need to trigger a change of currentSyllables

    //when that button is clicked, we may need to trigger another API call based on the value of object.word 