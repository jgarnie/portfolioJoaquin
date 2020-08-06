import React, { useState, useEffect} from 'react';
import "./navigation.scss";

export default function NavigationLink({url,index,text, isActive,getIndex}) {
    


    const handleClick =()=>{
        
        getIndex(index)
        
    }
  
    return (<>
        
            <div>
                <a className={isActive ? 'nav__link nav__link--active' : 'nav__link'} href={url} onClick={handleClick}> <p>{text}</p> </a>
            </div>
        
    </>)
}
