
import './App.css';

import React from 'react'

import {Route, Routes} from 'react-router-dom'
import { LandingPage } from './Components/LandingPage/LandingPage';
import  {Navigation}  from './Components/Navigation/Navigation';
import { Footer } from './Components/Footer/Footer';
import { ProjectsPage } from './Components/ProjectsPage/ProjectsPage';
import { PortFolio } from './Components/PortFolio/PortFolio';
import { Reviews } from './Components/ReviewsPage/Reviews';
import { useDispatch } from 'react-redux';
import { fetchReviews } from './Components/ReviewsPage/ReviewsFeature';
import { ContactPage } from './Components/ContactPage/ContactPage';

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchReviews())
  }, [])

  return (
      <div className="App">
        <Navigation elID={"first-content-wrapper"} />
        <Routes>
          <Route path={'/'} element={<LandingPage />} />
          <Route path={'/projects*'} element={<ProjectsPage />} />
          <Route path={'/portfolio'} element={<PortFolio />} />
          <Route path={'/reviews'} element={<Reviews />} />
          <Route path={'/contact'} element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
