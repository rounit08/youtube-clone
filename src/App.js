import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import React from 'react';
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="app">
      <Router>
      <Header />
      <div className="app__page"> 
      
      <Sidebar />
        <Routes >
        <Route  path="/search/:searchTerm" element={
           <SearchPage />
        }>
           
        {/*  
      <Sidebar />
      <SearchPage />
      </div> */}
          </Route>

          <Route  path="/" element={ <RecommendedVideos />}>
         
      {/* <div className='app__page'> 
      <Sidebar />
      <RecommendedVideos />
      </div> */}
          </Route>
        </Routes></div>
      
      </Router>

    </div>
  );
}

export default App;
