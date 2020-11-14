import React,{ useState,useEffect} from 'react';
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
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';

function App() {
const [change, setChange] = useState(true);

useEffect(() => {
  ReactGa.initialize("G-63Z8W1HYDF")

  ReactGa.pageview("/")
}, [])

const handleChange=(mode)=>{
  setChange(mode);
 console.log(change)

}

  return (
    <>

    <div className={change?"":"app"}>
<Helmet>
<meta name="description" content="Joaquin Garcia Nieto Frontend and fullstack developer portfolio, teck stack based in React, Javascrip, PhP, Laravel, CSS with SCSS SASS, open know interesting projects." />
<meta name="robots" content="index, follow" />
<meta name="keywords" content="REACT, JavaScript, PHP, Laravel, Joaquin, Garcia, Nieto,joaquin garcia nieto, developer, programmer, Prague, Frontend, fullstack, MySQl"/>
<meta name="author" content="Joaquin Garcia Nieto"/>

<title>Joaquin Garcia</title>
<meta name="description" content="Joaquin Garcia Nieto Frontend and fullstack developer portfolio, teck stack based in React, Javascrip, PhP, Laravel, CSS with SCSS SASS, open know interesting projects."/>


<meta itemprop="name" content="Joaquin Garcia"/>
<meta itemprop="description" content="Joaquin Garcia Nieto Frontend and fullstack developer portfolio, teck stack based in React, Javascrip, PhP, Laravel, CSS with SCSS SASS, open know interesting projects."/>
<meta itemprop="image" content="https://media-exp1.licdn.com/dms/image/C4D03AQHiViUngITBiw/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=IOYl_dUo3UrFYv1D3321bk1S2Dmw4C_tiH_0DZkqBxA"/>


<meta property="og:url" content="https://joaquingarcia.tech"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Joaquin Garcia"/>
<meta property="og:description" content="Joaquin Garcia Nieto Frontend and fullstack developer portfolio, teck stack based in React, Javascrip, PhP, Laravel, CSS with SCSS SASS, open know interesting projects."/>
<meta property="og:image" content="https://media-exp1.licdn.com/dms/image/C4D03AQHiViUngITBiw/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=IOYl_dUo3UrFYv1D3321bk1S2Dmw4C_tiH_0DZkqBxA"/>


<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Joaquin Garcia"/>
<meta name="twitter:description" content="Joaquin Garcia Nieto Frontend and fullstack developer portfolio, teck stack based in React, Javascrip, PhP, Laravel, CSS with SCSS SASS, open know interesting projects."/>
<meta name="twitter:image" content="https://media-exp1.licdn.com/dms/image/C4D03AQHiViUngITBiw/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=IOYl_dUo3UrFYv1D3321bk1S2Dmw4C_tiH_0DZkqBxA"/>


</Helmet>

      <Navigation modes={handleChange}/>
      <Header />
      <Fade up>
        <Process />
      </Fade>
      <Fade>
        <MySkills />
      </Fade>
        <MyPortfolio />
      <Fade>
        <AboutMe />
      </Fade>
      <Fade>
        <ContactMe />
      </Fade>
      <Fade>
        <FindMe />
      </Fade>
    </div>

    </>
  );
}

export default App;
