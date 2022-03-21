
const DisplayHaiku = (props) => {
    return(
        <>
            <h2>I'm a haiku!</h2>
            {
                console.log(props.currentHaiku)
            }
        </>
        
    )
}

export default DisplayHaiku