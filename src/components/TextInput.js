import axios from 'axios';
import { useEffect, useState } from 'react';

const TextInput = (props) => {

    const [userInput, setUserInput] = useState("");
    const [syllableCount, setSyllableCount] = useState();
    const [spelling, setSpelling] = useState();

    useEffect(() => {
        console.log('useEffect running')
        if (userInput) {
            axios({
                url: `https://api.datamuse.com/words?sp=${userInput}&md=s`
            }).then(function (result) {
                setSpelling("")
                const { data } = result
                console.log(data)
                setSyllableCount(result.data[0].numSyllables)
                setSpelling(data[0].word)
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
            <h2>Enter a word to get started:</h2>
            <form onSubmit={handleSubmit} id="form">
                <input onChange={handleChange} type="text" id="input" name="input" />
                <label htmlFor="input"></label>
                <button disabled={ disableButton(userInput) }>Submit</button>
            </form>
            {!userInput && (
                <p>enter word</p>
            )}
            {/* count > 2 is test for now, update to 5 later */}
            {syllableCount > props.allowedSyllables && (
                <p>too many syllables!!!</p>
            )}
            {/* !/^[a-z]+$/i.test(userInput) && */}
            {stringDoesNotPass(userInput) && userInput && (
                <p>no special characters or number or space!!!!!!</p>
            )}
            {/* {syllableCount > 5 ? (<p>too many syllables!!!</p>) : (<p>just the right amount of syllables</p>)} */}
            <p>checking if spellcheck is working: {spelling}</p>
        </>
    )
}

export default TextInput;