import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Form() {

  const [userInput, setUserInput] = useState("");
  const [syllableCount, setSyllableCount] = useState();
  const [spelling, setSpelling] = useState();

  useEffect(()=>{
    console.log('useeffect running')
    if(userInput!==""){
      axios({
        url: `https://api.datamuse.com/words?sp=${userInput}&md=s`
      }).then(function(result){
        const {data} = result
        console.log(data)
        setSyllableCount(result.data[0].numSyllables)
        setSpelling(data[0].word)
      })
    }
  },[userInput])




  const handleChange = (event) => {
    // if(userInput!==""){
    //   axios({
    //     url: `https://api.datamuse.com/words?sp=${userInput}&md=s`
    //   }).then(function(result){
    //     // const {data} = result
    //     // console.log(data)
    //     // console.log(result.data);
    //     setSyllableCount(result.data[0].numSyllables)
    //   })
    // }
    setUserInput(event.target.value);
    setSyllableCount(0)
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/haiku/${ spelling }`)
    setSyllableCount(0)
    setUserInput("")
    e.target[0].value='';
  }

  const stringDoesNotPass = (string) => {
    if(/^[a-z]+$/i.test(string)){
      return false;
    }else{
      return true;
    }
  }

  console.log(syllableCount)
  // console.log(props)
  return (
    <>
      <h2>Enter a word to get started:</h2>
      <form onSubmit={handleSubmit} id="form">
        <input onChange={handleChange} type="text" id="input" name="input" />
        <label htmlFor="input"></label>
        <button disabled={stringDoesNotPass(userInput)}>Submit</button>
      </form>
      {!userInput && (
        <p>enter word</p>
      )}
      {/* count > 2 is test for now, update to 5 later */}
      {syllableCount > 2 &&(
        <p>too many syllables!!!</p>
      )}
      {/* !/^[a-z]+$/i.test(userInput) && */}
      {stringDoesNotPass(userInput) && userInput &&(
        <p>no special characters or number or space!!!!!!</p>
      )}
      {/* {syllableCount > 5 ? (<p>too many syllables!!!</p>) : (<p>just the right amount of syllables</p>)} */}
      <p>checking if spellcheck is working: {spelling}</p>
    </>
  )
}

export default Form;

// NOTE: if importing <TextInput /> hand down "navigateFunction" as "customFunction"
// and set allowedSyllables via props to 5
// const navigate = useNavigate();
// const navigateFunction = (userWord) => {
//   navigate(`/haiku/${userWord}`)
// }