import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Form(props) {

  const [userInput, setUserInput] = useState("");

  axios({
    url: `https://api.datamuse.com/words?sp=${userInput}&md=s`
  }).then(function(result){
    // console.log(result.data);
  })

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/haiku/${ userInput }`)
  }
  
  return (
    <>
      <h2>Enter a word to get started:</h2>
      <form onSubmit={handleSubmit} id="form">
        <input onChange={handleChange} type="text" id="input" name="input" />
        <label htmlFor="input"></label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form;