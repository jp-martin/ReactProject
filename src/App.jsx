import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import EventPage from './Pages/EventPage';
import Header from './Components/Includes/Header';
import Footer from './Components/Includes/Footer';
//import './App.css';
import './Assets/Styles/styles.css';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='event/:eventId' element={<EventPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
