//ResultsPage.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import WordGenerator from "./WordGenerator";

const ResultsPage=()=> {
     const { userWord } = useParams();
     // console.log(userWord)

     return(
          <section className="resultsPage">
               <h2>Here are your results</h2>
               <WordGenerator initialWord={ userWord } />
          </section>
     )
}

export default ResultsPage;