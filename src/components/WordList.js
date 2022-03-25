import { useEffect, useState } from "react";
import wordListApiCall from "../reusableLogic/wordListApiCall";
import TextInput from './TextInput';
import axios from "axios";


const WordList = (props) => {
    //set during OnClick event and use this to send next API call:
    const [chosenWord, setChosenWord] = useState("");
    const [wordList, setWordList] = useState([]);
    const [filteredWordList, setFilteredWordList] = useState([])
    const [initialWord, setInitialWord] = useState("");
    // set as true when no returned words to show text input:
    const [showInput, setShowInput] = useState(false);
    // track user input inside text input:
    const [userInput, setUserInput] = useState("");


    const regex = /^[a-zA-Z]+$/;


    // establish initial word from user word handed down via props:
    if (props.initialWord) {
        // ensure initialWord only updates ONCE:
        if (props.initialWord !== initialWord) {
            setInitialWord( props.initialWord )
        }
    }

    const handleNewWord = (word) => {
        //0 refers to the first key value for first word
        ///////NEED TO UPDATE SYLLABLE COUNT HERE - IT ISN'T REGISTERING////
        props.handleHaikuWords(word, 2, 0);
        axios({
            url: "https://api.datamuse.com/words",
            params: {
                sp: word,
                md: "s"
            }
        }).then((returnedData) => {
            props.handleSyllables(returnedData.data[0].numSyllables)
        })
    }
    // once we've received the initial word from the user set chosen word manually ONCE:
    useEffect(() => {
        setChosenWord(initialWord)
        // manually push first word to haiku
        console.log(initialWord)
        handleNewWord(initialWord)
        // props.handleHaikuWords(initialWord, props.currentSyllables);
        // axios({
        //     url: "https://api.datamuse.com/words",
        //     params: {
        //         sp: initialWord,
        //         md: "s"
        //     }
        // }).then((returnedData) => {
        //     // manually push first word syllables to 
        //     // console.log(returnedData.data[0]);
        //     props.handleSyllables(returnedData.data[0].numSyllables)
        // })
    }, [initialWord])

    // call API for each chosen word:
    useEffect(() => {
        wordListApiCall(chosenWord, setWordList)
        ///CAN I PULL THE CHOSEN WORD FROM HERE? - don't think so 
        // console.log(chosenWord)
        // props.handleLastWord(chosenWord);
    }, [chosenWord])
    
    // filter returnedWordList:
    useEffect(() => {
        const filteredForSyllables = wordList.filter((word) => {
            // return if syllables are less than allowed syllables and returned result is not a number:
            return word.numSyllables <= props.allowedSyllables && word.word.match(regex)
        })
        if (!wordList[0]) {
            setFilteredWordList([])
            setShowInput(true)
        } else if (filteredForSyllables.length <= 20) {
            setFilteredWordList(filteredForSyllables)
            // console.log("not enough")
            setShowInput(false)
        } else {
            let shuffledWords = [];
            while (shuffledWords.length <= 19) {
                const random = filteredForSyllables[Math.floor(Math.random() * filteredForSyllables.length)]
                if (!shuffledWords.includes(random)) {
                    shuffledWords.push(random)
                }
            }
            setFilteredWordList(shuffledWords)
            setShowInput(false)
        }
    }, [wordList])

    // handle click on each word:
    const handleClick = (wordParam, syllableParam,idParam) => {
        props.handleSyllables(syllableParam);
        props.handleHaikuWords(wordParam, syllableParam, idParam);
        setChosenWord(wordParam);
        // console.log(wordParam, syllableParam, idParam)
    }

    const handleUserInput = (userWord) => {
        setChosenWord(userWord)
        handleNewWord(userWord)
        setShowInput(false)
    }

    return (
        <>
            {/* <h3>I'm the words!</h3> */}
            {
                filteredWordList[0]
                    ? 
                        filteredWordList.map((word) => {
                            return (
                                <li key={word.score}>
                                    <button onClick={function () { handleClick(word.word, word.numSyllables, props.currentSyllables) }} >{word.word}</button>
                                </li>
                            )
                        }) 
                    : null
            }
            {
                showInput
                    ?<TextInput allowedSyllables={ props.allowedSyllables } customFunction={ handleUserInput } />
                    :null
            }
        </>
    )
}

export default WordList;