import React from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Header from './components/Header/Header.jsx';
import Process from './components/Process/Porcess.jsx';
import MySkills from './components/MySkills/MySkills.jsx';
import MyPortfolio from './components/MyPortfolio/MyPortfolio.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx';
import "./App.scss";
import FindMe from './components/FindMe/FindMe.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';

function App() {
  return (
    <>
    
      <Navigation />
      <Header />
      <Process />
      <MySkills />
      <MyPortfolio />
      <AboutMe />
      <ContactMe />
      <FindMe />
      
      
    </>
  );
}

export default App;
