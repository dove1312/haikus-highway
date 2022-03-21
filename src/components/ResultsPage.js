//ResultsPage.js

import { useEffect, useState } from "react";
import WordGenerator from "./WordGenerator";

const ResultsPage=()=> {
     // const { userWord } = useParams();
     const userWord = "cat"

     const [currentHaiku, setCurrentHaiku] = useState([]);

     return(
          <section className="resultsPage">
               <h2>Here are your results</h2>
               <WordGenerator currentHaiku={currentHaiku} updateHaiku={ setCurrentHaiku } initialWord={ userWord } />
          </section>
     )
}

export default ResultsPage;