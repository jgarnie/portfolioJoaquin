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
                loop={1}
                wrapper="b"
                steps={[
                        'let Joaquin  =  developer;',
                        1000,
                        '{ Let\'s make things together! }',
                        0,
                    
                    ]}
               />
               
           </span>
           
        </header>
    )
}
