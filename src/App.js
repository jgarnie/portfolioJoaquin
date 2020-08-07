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
      <Process />
      <MySkills />
      <MyPortfolio />
      <AboutMe />
      <ContactMe />
      <FindMe />
    
    </div>
    </>
  );
}

export default App;
