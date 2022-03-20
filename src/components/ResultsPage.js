//ResultsPage.js

import { useEffect, useState } from "react";
import DisplayHaiku from "./DisplayHaiku";
import WordGenerator from "./WordGenerator";
import wordListApiCall from "./wordListApiCall";

const ResultsPage=()=> {
     const [firstWordList, setFirstWordList] = useState([]);

     // const { userWord } = useParams();
     const userWord = "cat"

     return(
          <section className="resultsPage">
               <h2>Here are your results</h2>
               <DisplayHaiku />
               <WordGenerator initialWord={ userWord } />
          </section>
     )
}

export default ResultsPage;