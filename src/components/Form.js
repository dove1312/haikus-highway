import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextInput from './TextInput';

function Form() {

  const navigate = useNavigate();

  const navigateFunction = (userWord) => {
    navigate(`/haiku/${userWord}`)
  }

  // console.log(syllableCount)
  // console.log(props)
  return (
    <div>
      <h2>Enter a word to get started:</h2>
      <TextInput allowedSyllables="5" customFunction={navigateFunction} />
    </div>
  )
}

export default Form;