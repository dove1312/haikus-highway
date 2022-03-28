import axios from 'axios';
import { useEffect, useState } from 'react';

const TextInput = (props) => {

    const [userInput, setUserInput] = useState("");
    const [syllableCount, setSyllableCount] = useState();
    const [spelling, setSpelling] = useState();
    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
        if (userInput) {
            axios({
                url: `https://api.datamuse.com/words?sp=${userInput}&md=s`
            }).then(function (result) {
                setSpelling("")
                const { data } = result;
                if (data[0]) {
                    setSyllableCount(result.data[0].numSyllables)
                    setSpelling(data[0].word)
                }
            }).catch((error) => {
                setErrorMessage("Sorry, our word database is undergoing maintenance")
            })
        }
    }, [userInput])

    const disableButton = (input) => {
        if (!stringDoesNotPass(input) && syllableCount <= props.allowedSyllables && spelling) {
            return false;
        } else {
            return true;
        }
    }

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.customFunction( userInput )
    }

    const stringDoesNotPass = (string) => {
        if (/^[a-z]+$/i.test(string)) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <>
            <form className={`textInputForm ${ props.className }`} onSubmit={handleSubmit} id="form">
                <input onChange={handleChange} type="text" id="input" name="input" />
                <label className='sr-only' htmlFor="input">Enter a word for the haiku:</label>
                <button className="submitButton" disabled={ disableButton(userInput) }>Submit</button>
            </form>
            {/* {!userInput && (
                <p>Within allowed syllable count.</p>
            )} */}
            {/* count > 2 is test for now, update to 5 later */}
            {syllableCount > props.allowedSyllables && userInput ? (
                <p className='warning'>Too many syllables!</p>
            ) : (<p className='secondaryWarning'>Within allowed syllable count</p>)}
            {/* !/^[a-z]+$/i.test(userInput) && */}
            {stringDoesNotPass(userInput) && userInput && (
                <p className='warning'>No special characters, numbers or spaces please!</p>
            )}
            {/* {syllableCount > 5 ? (<p>too many syllables!!!</p>) : (<p>just the right amount of syllables</p>)} */}
            {/* <p>checking if spellcheck is working: {spelling}</p> */}
        </>
    )
}

export default TextInput;