import React from 'react';
import "./Header.scss";
import Typical from "react-typical";

export default function Header() {



    return (
        <header>
           
                <h1>
                    Hi, <a href="#about">I'm Joaquin Garcia</a>
                </h1> 
           
           
           
           <span> 

               <Typical 
                loop={Infinity}
                wrapper="b"
                steps={[
                        'I\'m a developer',
                        1000,
                        'Curious',
                        1000,
                        'Team player',
                        1000,
                        'Animal lover',
                        1000,
                        'Lets develop together!',
                        10000,
                    ]}
               />
               
           </span>
           
        </header>
    )
}
