//ResultsPage.js
import DisplayHaiku from "./DisplayHaiku";
import WordGenerator from "./WordGenerator";

const ResultsPage=()=> {
     return(
          <section className="resultsPage">
               <h2>Here are your results</h2>
               <DisplayHaiku />
               <WordGenerator />
          </section>
     )
}

export default ResultsPage;