//ResultsPage.js
import { useParams } from "react-router-dom";
import WordGenerator from "./WordGenerator";
import tree from '../assets/tree.png';
import tree2 from '../assets/tree2.png';

const ResultsPage=()=> {
     const { userWord } = useParams();

     return(
          <main className="results">
               <section className="resultsPage">
                    <div className="imgContainer">
                         <img src={tree} alt="tree" className="tree" />
                    </div>
                    <div className="imgContainer2">
                         <img src={tree2} alt="tree" className="tree" />
                    </div>
                    <div className="wrapper">
                         <WordGenerator initialWord={userWord} />
                    </div>
               </section>
          </main>
          
     )
}

export default ResultsPage;