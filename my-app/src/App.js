

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NavBar from "./components/NavBar/NavBar"
import {action, comedy, documentaries, horror, originals, romance} from './urls'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentary' isSmall/>
      
    </div>
  );
}

export default App;
