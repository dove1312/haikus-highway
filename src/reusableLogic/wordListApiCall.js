import axios from "axios";

const wordListApiCall = (wordParam, stateParam) => {
    axios({
        url: "https://api.datamuse.com/words",
        params: {
            rel_bga: wordParam,
            md: "s"
        }
    }).then((returnedData) => {
        stateParam(returnedData.data)
    })
}

export default wordListApiCall;