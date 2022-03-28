import liFromArray from '../reusableLogic/liFromArray';

const HaikuReturn = (props) => {

    return (
        <div className="haikuFlexContainer">
            <ul
                className={`line1 haikuLine ${props.syllables >= 5 ? "lineComplete" : null }` }
            >
                {
                    liFromArray(props.haikuArray, 0)
                }
                { props.button1 ? props.button1() : null }

            </ul>
            <ul
                className={`line2 haikuLine ${props.syllables >= 12 ? "lineComplete" : null}`}
            >
                {
                    liFromArray(props.haikuArray, 1)
                }
                {props.button2 ? props.button2() : null }
            </ul>
            <ul
                className={`line2 haikuLine ${props.syllables == 17 ? "lineComplete" : null}`}
            >
                {
                    liFromArray(props.haikuArray, 2)
                }
                {props.button3 ? props.button3() : null }
            </ul>
        </div>
    )

}

export default HaikuReturn