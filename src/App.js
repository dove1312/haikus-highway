import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
//may also need to add in Outlet as we progress

import ResultsPage from './components/ResultsPage';
import SavedHaikus from "./components/SavedHaikus";

function App() {
  return (
    <div>
      <h1>hello friends!</h1>

      <Routes>
        {<Route path="/home" element={<Home />}>}
          <Route path="/home/results" element={<ResultsPage />} />
          <Route path="/home/savedHaikus" element={<SavedHaikus />} />
          {</Route>}
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



    // nested components doesn't necessarily mean you need to have nested routes - can just have /savedHaikus (or just /haikus or any other name you want) for the saved haikus without needing to nest (a nav bar or any other components you want to stay on screen can be added to App.js) same goes with having to say /home - can just initiate <Home /> as "/" as it's the main page people expect to navigate to on typing the URL in.
    // since no elements on the page need to STAY on the page we can run 3 separate routes
    // savedHaikus will need to have a nested route since they want the poem to expand/appear on the same page