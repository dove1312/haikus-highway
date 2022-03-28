//ResultsPage.js
import { useParams } from "react-router-dom";
import WordGenerator from "./WordGenerator";

const ResultsPage=()=> {
     const { userWord } = useParams();

     return(
          <main>
               <section className="resultsPage">
                    <div className="wrapper">
                         <WordGenerator initialWord={userWord} />
                    </div>
               </section>
          </main>
          
     )
}

export default ResultsPage;