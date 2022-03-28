import HaikuReturn from './HaikuReturn';
import { Link } from 'react-router-dom';

const DisplayHaiku = (props) => {
    //define the variables to hold syllables and haiku to be able to map through and display
    const syllables = props.currentSyllables;
    const haikuLines = props.currentHaiku;

    //defining variables for each of the haiku lines as they update, so when updating one line with the 'remove' button, we can maintain the other 2 lines 
    const line1 = haikuLines[0];
    const line2 = haikuLines[1];
    const line3 = haikuLines[2]

    const handleClick = (whichLine) => {
        whichLine.pop();
        props.removeFromHaiku(line1, line2, line3);
    }

    const button1 = () => {
        return (
            <>
            <button
                className="removeButton"
                style={syllables <= 5 && line1.length > 1 ? { display: "block" } : { display: "none" }}
                onClick={() => { handleClick(line1) }} >
                Back
            </button>
            <Link to="/">
                    <button
                        className="restartButton"
                        style={line1.length == 1 ? { display: "block" } : { display: "none" }}>
                        Start Over
                    </button>
            </Link>
            
            </>
        )
    }

    const button2 = () => {
        return (
            <button
                className="removeButton"
                style={syllables > 5 && syllables <= 12 ? { display: "block" } : { display: "none" }}
                onClick={() => { handleClick(line2) }} >
                Back
            </button>
        )
    }

    const button3 = () => {
        return (
            <button
                className="removeButton"
                style={syllables > 12 ? { display: "block" } : { display: "none" }}
                onClick={() => { handleClick(line3) }}>
                    Back
            </button>
        )
    }

    return(
        <div className="haikuContainer">
            <HaikuReturn syllables={syllables} haikuArray={haikuLines} button1={button1} button2={button2} button3={button3} />
        </div>
    )
}

export default DisplayHaiku

