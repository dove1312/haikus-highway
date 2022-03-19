//ResultsPage.js
import {useState, useEffect} from 'react';

const ResultsPage=()=> {

     const [haikuLines, setHaikuLines]= useState([
          [
               {
                    word: "thunder",
                    syllables: 4
               },
               {
                    word: "flight",
                    syllables: 1
               }
          ],
          [
               {
                    word: "candy",
                    syllables: 2
               },
               {
                    word: "doggy",
                    syllables: 1
               },
               {
                    word: "lightning",
                    syllables: 2
               }
          ],
          [
               {
                    word: "superstar",
                    syllables: 2
               },
               {
                    word: "goal",
                    syllables: 4
               },
               {
                    word: "celebrate",
                    syllables: 4
               }

          ]
     ])
//will return 5, 6, 14//

     const [currentSyllables, setCurrentSyllables]= useState(0);
     // const [allowedSyllables, setAllowedSyllables] = useState(17);

useEffect(()=>{
     haikuLines.forEach((array) => {
          let sum = 0;
          let totalSum = 0;
          for (let i = 0; i < array.length; i++) {
               const syllables = array[i].syllables;
               sum += syllables
               //this console logs first syllable in array, then with 2nd number added, then with 3rd number added - then restarts for next array 
               // console.log(sum);
               
               //so need to take the value from here, and pull it outside the for loop 
          }
          
          setCurrentSyllables(currentSyllables + sum);
          
          // //right now, just the final round of syllables in array 3 is being added into currentSyllables- need to push EACH item 
          // setCurrentSyllables(currentSyllables + sum);
          // console.log(currentSyllables);
          
          
     })
     
//need to figure out dependency array- it is updating to just the total of the last array on page load, but when you change something and save again, it updates to add all 3 together - so dependency array needs to be defined so it re-renders     
},[haikuLines]);



const calculateSyllables = ()=>{
     if (currentSyllables < 5){
          console.log('line 1 please');
     }
     else if(currentSyllables == 5){
          console.log('line 1 complete');
     }
     else if(currentSyllables > 5 && currentSyllables < 12){
          console.log('line 2 please');
     }
     else if (currentSyllables == 12){
          console.log('line 2 complete');
     }
     else if (currentSyllables > 12 && currentSyllables < 17){
          console.log('line 3 please');
     } else if (currentSyllables == 17) {
          console.log('complete!')
     } else {
          console.log('too many syllables');
     }
}

calculateSyllables();



     // console.log(currentSyllables);
     // const loop1 = () => {
     //      const line1 = arrays[0];
     //      let sum1 = 0;
     //      for (let i = 0; i < line1.length; i++) {
     //           const syllables = line1[i].syllables;
     //           sum1 += syllables
     //      }
     //      console.log(sum1);
     //      setCurrentSyllables(setCurrentSyllables.push(sum1));
     // }

     // loop1();

     // const loop2 = () => {
     //      const line2 = arrays[1];
     //      let sum2 = 0;
     //      for (let i = 0; i < line2.length; i++) {

     //           const syllables = line2[i].syllables;
     //           sum2 += syllables
     //      }
     //      console.log(sum2);
     //      setCurrentSyllables(currentSyllables.push(sum2));
     //      //what if instead we setCurrentSyllables with the sum2
     //      //THEN we use setAllowedSyllables to (allowed syllables - sum2)
     //      //if statement: if allowed syllables < sum, throw error
     // }

     // loop2();

     // const loop3 = () => {
     //      const line3 = arrays[2];
     //      let sum3 = 0;
     //      for (let i = 0; i < line3.length; i++) {

     //           const syllables = line3[i].syllables;
     //           sum3 += syllables
     //      }
     //      console.log(sum3);
     //      setCurrentSyllables(currentSyllables.push(sum3));
     // }

     // loop3();

     // console.log(currentSyllables);






     return(
          <h2>Here are your results</h2>
     )
}

export default ResultsPage;














// //can use .map as well
// arrays.forEach((array)=>{
//      let sum=0;
//      for(i=0; i<array.length; i++){

//           const syllables=array[i].syllables;
//           sum+=syllables
//      }
//      console.log(sum);
//      //need to use method to push item in without replacing other items
//      const newArrays=[];
//      newArrays.push(sum);
//      console.log(newArrays);
// })
//if can get array to have [5,7,5]
     //can you then have this stored in currentSyllables - and conditional: if currentSyllables[0] = 5 - start pushing to haikuLines[1], etc



//this gets total of all syllables inside the array above
// const try3 = function () {
//      let sum = 0;
//      for (i = 0; i < array.length; i++) {
//           const syllable = array[i].syllables;
//           sum += syllable;
//      }
//      console.log(sum);
// }
// try3();
//we would then have to filter the array we get back and find items that are the same value or less than the syllables available

// //state
// const [userInput, setUserInput] = useState('');
// //want to use 'onChange' to update state:
// const handleInputChange = (event) => {
//      setUserInput(event.target.value);
// }
//then use value of 'userInput' to make the API call after every letter 
     //then have a separate state that is set through the API call (words to appear, so an array of objects)

//keyPress event listeners:
     //space is = 32 
     //enter is = 13
//could we make a keypress event listener that responds both:
// eventTarget.addEventListener("keydown", event)=>{
//      if (event.keyCode === 32 || event.keyCode === 13) { call API useEffect function }
// }
//keydown = space and enter


//ALL APPEAR TO RETURN ONLY ONE WORD

 //md:s returns information on the object that says # of syllables the word is - so when you call it won't be a paramater to filter the results- WE will need to filter the results according to what syllables we want
     //need to filter through the array with words[i].syllables to get #, and then add those together to find total # of syllables currently being used 
     //so needs to be 5-{syllables used} = {syllable range we want - min to max}
          //so 2 syllables used, we would want 5-2= 3 OR LESS 

//rel_trg returns information RELATED to word - but it will only take ONE word (can't write 'cat door') 
     //DOES NOT RECOGNIZE SPACES

//rel_bga -only takes one word as well - seems similar to _trg but pulls most frequent followers 
     //DOES NOT RECOGNIZE SPACES 

//sp : returns words that are spelled like it (thunder gibes back chunder, hunder, tender, hinder, etc)

//lc: returns predictable words based on the last written word (so 'cat in the storm' only pulls words related to STORM, plus general words like the, a, and, etc)
     //good to continually create suggestions - trigger the api call on each key press of SPACE 

// max - specifies max # of returns 