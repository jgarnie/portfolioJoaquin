import React,{ useState} from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Header from './components/Header/Header.jsx';
import Process from './components/Process/Porcess.jsx';
import MySkills from './components/MySkills/MySkills.jsx';
import MyPortfolio from './components/MyPortfolio/MyPortfolio.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx';
import "./App.scss";
import FindMe from './components/FindMe/FindMe.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Fade from 'react-reveal/Fade';



function App() {
const [change, setChange] = useState(true);


const handleChange=(mode)=>{
  setChange(mode);
 console.log(change)

}

  return (
    <>
    
    <div className={change?"":"app"}>

    
      <Navigation modes={handleChange}/>
      <Header />
      <Fade up>
        <Process />
      </Fade>
      <Fade right>
        <MySkills />
      </Fade>
      <Fade>
        <MyPortfolio />
      </Fade>
      <Fade left>
        <AboutMe />
      </Fade>
      <Fade right>
        <ContactMe />
      </Fade>
      <Fade up>
        <FindMe />
      </Fade>
    </div>
    
    </>
  );
}

export default App;
