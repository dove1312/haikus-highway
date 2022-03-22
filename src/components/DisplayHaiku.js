
const DisplayHaiku = (props) => {
    console.log(props.currentHaiku);
    const haikuLines = props.currentHaiku;
    return(
        <>
            <h2>I'm a haiku!</h2>
            {
                haikuLines.map((line)=>{
                    return(
                        <ul>
                            {
                                line.map((word)=>{
                                    return(
                                        // potentially wrap the words in buttons so they can click to remove as well
                                        <li>{word}</li>
                                    )
                                })
                            }
                        </ul>
                    )
                })
            }

        </>
        
    )
}

export default DisplayHaiku