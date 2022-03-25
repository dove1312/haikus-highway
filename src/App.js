import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
//may also need to add in Outlet as we progress
import { useState } from 'react';

import ResultsPage from './components/ResultsPage';
import SavedHaikus from "./components/SavedHaikus"
import Home from "./components/Home";


function App() {

  return (
    <div className='appContainer'>
      <h1>hello friends!</h1>

      <Routes>
        {/* just commenting out the HOME route until the Home component is made! */}
        <Route path="/" element={<Home />}/>
        <Route path="/haiku" element={<Home />} />
        <Route path="/haiku/:userWord" element={<ResultsPage />} />
        <Route path="/savedHaikus" element= {<SavedHaikus />}/>
      </Routes>

    </div>
  );
}

export default App;


//I laid it like this because home page is a component off of App.js, so path should be /home 
  //we should be able to go back to the initial page to start again, so nested results and saved Haikus inside home
  //IF YOU ALL THINK THIS IS CORRECT- then we need to have a <Link> for the home component to send users to the results page once word is selected and submitted

//I did not nest any routes inside /results because I assume because they are rendered to the Results page, so no need to test (they will not be separate pages)
//I assume we WILL need to nest routes in savedHaikus- but we'll get there when we get there