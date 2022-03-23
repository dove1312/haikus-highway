
const DisplayHaiku = (props) => {
    //define the variables to hold syllables and haiku to be able to map through and display
    const syllables = props.currentSyllables;
    const haikuLines = props.currentHaiku;
    return(
        <>
            <h2>Here's Your Haiku!</h2>
            <ul 
                className="line1"
                style= {syllables >=5 ? {color:"grey"} : {color:"black"}}
            >
                {haikuLines[0].map((word)=>{
                    return(
                    <li key={word.key}>{word.word}</li>
                    )
                })
                }
            </ul>
            <ul
                className="line2"
                style={syllables >= 12 ? { color: "grey" } : { color: "black" }}
            >
                {haikuLines[1].map((word) => {
                    return(
                    <li key={word.key}>{word.word}</li>
                    )
                })
                }
            </ul>
            <ul
                className="line3"
                style={syllables == 17 ? { color: "grey" } : { color: "black" }}
            >
                {haikuLines[2].map((word) => {
                    return(
                    <li key={word.key}>{word.word}</li>
                    )
                })
                }
            </ul>
        </>
        
    )
}

export default DisplayHaiku