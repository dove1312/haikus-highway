//ResultsPage.js
import { useParams } from "react-router-dom";
import WordGenerator from "./WordGenerator";

const ResultsPage=()=> {
     const { userWord } = useParams();

     return(
          <section className="resultsPage">
               <div className="wrapper">
                    <WordGenerator initialWord={userWord} />
               </div>
          </section>
     )
}

export default ResultsPage;