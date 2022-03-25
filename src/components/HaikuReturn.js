import liFromArray from '../reusableLogic/liFromArray';

const HaikuReturn = (props) => {

    console.log(props);

    return (
        <div className="haikuFlexContainer">
            <ul
                className="line1 haikuLine"
            style={props.syllables >= 5 ? { color: "grey" } : { color: "black" }}
            >
                {
                    liFromArray(props.haikuArray, 0)
                }
                <button
                    style={props.syllables <= 5 ? {display:"block"} : {display:"none"}}
                    onClick={props.handleClick} >REMOVE</button>

            </ul>
            <ul
                className="line2 haikuLine"
            style={props.syllables >= 12 ? { color: "grey" } : { color: "black" }}
            >
                {
                    liFromArray(props.haikuArray, 1)
                }
                <button
                    style={props.syllables > 5 && props.syllables <=12 ? { display: "block" } : { display: "none" }}
                    onClick={props.handleClick2} >REMOVE</button>
            </ul>
            <ul
                className="line3 haikuLine"
            style={props.syllables == 17 ? { color: "grey" } : { color: "black" }}
            >
                {
                    liFromArray(props.haikuArray, 2)
                }
                <button
                    style={props.syllables > 12 ? { display: "block" } : { display: "none" }}
                    onClick={props.handleClick3} >REMOVE</button>
            </ul>
        </div>
    )
}

export default HaikuReturn