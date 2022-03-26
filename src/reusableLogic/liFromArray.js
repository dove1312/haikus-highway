
const liFromArray = (array, index) => {
    return(
        array[index].map((word) => {
            return (
                <li key={word.key}>{word.word}</li>
            )
        })
    )
}

export default liFromArray