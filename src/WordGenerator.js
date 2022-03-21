// //ResultsPage.js
// import { useState, useEffect } from 'react';

// const WordGenerator= () => {

//      const [haikuLines, setHaikuLines] = useState([
//           [
//                {
//                     word: "thunder",
//                     syllables: 2
//                },
//                {
//                     word: "flight",
//                     syllables: 1
//                }
//           ],
//           [
//                {
//                     word: "candy",
//                     syllables: 1
//                },
//                {
//                     word: "doggy",
//                     syllables: 1
//                },
//                {
//                     word: "lightning",
//                     syllables: 3
//                }
//           ],
//           [
//                {
//                     word: "superstar",
//                     syllables: 2
//                },
//                {
//                     word: "goal",
//                     syllables: 4
//                },
//                {
//                     word: "celebrate",
//                     syllables: 2
//                }

//           ]
//      ])
//      //will return 5, 6, 14//

//      const [currentSyllables, setCurrentSyllables] = useState([]);
//      // const [allowedSyllables, setAllowedSyllables] = useState(17);

//      // console.log(currentSyllables);
//      useEffect(()=> {
     
//      const loop1 = () => {
//           const line1 = haikuLines[0];
//           let sum1 = 0;
//           for (let i = 0; i < line1.length; i++) {
//                const syllables = line1[i].syllables;
//                sum1 += syllables
//           }
//           setCurrentSyllables(currentSyllables.push(sum1))
          
//      }
//      loop1();

//      const loop2 = () => {
//           const line2 = haikuLines[1];
//           let sum2 = 0;
//           for (let i = 0; i < line2.length; i++) {
//                const syllables = line2[i].syllables;
//                sum2 += syllables
//           }
//           setCurrentSyllables(currentSyllables.push(sum2));
          
//           //what if instead we setCurrentSyllables with the sum2
//           //THEN we use setAllowedSyllables to (allowed syllables - sum2)
//           //if statement: if allowed syllables < sum, throw error
//      }
//      loop2();
//           console.log(currentSyllables);

//      // const loop3 = () => {
//      //      const line3 = haikuLines[2];
//      //      let sum3 = 0;
//      //      for (let i = 0; i < line3.length; i++) {

//      //           const syllables = line3[i].syllables;
//      //           sum3 += syllables
//      //      }
//      //      setCurrentSyllables(currentSyllables.push(sum3));     
//      // }
//      // loop3();
//      // console.log(currentSyllables);
          
//      },[haikuLines]);



//      const calculateSyllables = () => {
//           if (currentSyllables < 5) {
//                console.log('line 1 please');
//           }
//           else if (currentSyllables == 5) {
//                console.log('line 1 complete');
//           }
//           else if (currentSyllables > 5 && currentSyllables < 12) {
//                console.log('line 2 please');
//           }
//           else if (currentSyllables == 12) {
//                console.log('line 2 complete');
//           }
//           else if (currentSyllables > 12 && currentSyllables < 17) {
//                console.log('line 3 please');
//           } else if (currentSyllables == 17) {
//                console.log('complete!')
//           } else {
//                console.log('too many syllables');
//           }
//      }

//      // calculateSyllables();



//      // console.log(currentSyllables);
//      // const loop1 = () => {
//      //      const line1 = arrays[0];
//      //      let sum1 = 0;
//      //      for (let i = 0; i < line1.length; i++) {
//      //           const syllables = line1[i].syllables;
//      //           sum1 += syllables
//      //      }
//      //      console.log(sum1);
//      //      setCurrentSyllables(setCurrentSyllables.push(sum1));
//      // }

//      // loop1();

//      // const loop2 = () => {
//      //      const line2 = arrays[1];
//      //      let sum2 = 0;
//      //      for (let i = 0; i < line2.length; i++) {

//      //           const syllables = line2[i].syllables;
//      //           sum2 += syllables
//      //      }
//      //      console.log(sum2);
//      //      setCurrentSyllables(currentSyllables.push(sum2));
//      //      //what if instead we setCurrentSyllables with the sum2
//      //      //THEN we use setAllowedSyllables to (allowed syllables - sum2)
//      //      //if statement: if allowed syllables < sum, throw error
//      // }

//      // loop2();

//      // const loop3 = () => {
//      //      const line3 = arrays[2];
//      //      let sum3 = 0;
//      //      for (let i = 0; i < line3.length; i++) {

//      //           const syllables = line3[i].syllables;
//      //           sum3 += syllables
//      //      }
//      //      console.log(sum3);
//      //      setCurrentSyllables(currentSyllables.push(sum3));
//      // }

//      // loop3();

//      // console.log(currentSyllables);






//      return (
//           <h3>Did it Work?</h3>
//      )
// }

// export default WordGenerator;