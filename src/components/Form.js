import { useNavigate } from "react-router-dom";
import TextInput from './TextInput';

function Form() {

  const navigate = useNavigate();

  const navigateFunction = (userWord) => {
    navigate(`/haiku/${userWord}`)
  }

  return (
    <div className="initialWordForm">
      <h2>Enter a word to get started:</h2>
      <TextInput className="homePage" allowedSyllables="5" customFunction={navigateFunction} />
    </div>
  )
}

export default Form;