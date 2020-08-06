import React, { useState, useEffect} from 'react';
import "./navigation.scss";
import NavigationLink from "./NavigationLink.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navigation() {
    const [ isActive, setisActive] = useState(null);
    const [ menu, setMenu]= useState(true);
    const [refresh, setRefresh]= useState(0)

    let links = [
        { text: 'Home', url:'#root' },
        { text: 'Skills', url:'#skills' },
        { text: 'Portfolio', url:'#portfolio' },
        { text: 'About me', url:'#about' },
        { text: 'Contact', url:'#contact' },
    ]
    const handleClick=(index)=>{
        
        setisActive(index);
        setRefresh(refresh+1);
        console.log(refresh)
        
    }
    const handleMenu=()=>{
     
        menu ? setMenu(false) : setMenu(true);
        console.log(menu)
    }
    useEffect(() => {
       setMenu(true);
      }, [ refresh ]);
    return (
        
            <nav className="nav">
                <div className="nav__logo">
                    <div>J</div>
                    <div>G</div>
                    <div>N</div>
                </div>
                
                    <div className="nav__container">
                        
                            {links.map((link, index)=>(
                                
                                <NavigationLink 
                                    key={ index } 
                                    text={ link.text } 
                                    url={ link.url } 
                                    index={ index } 
                                    isActive={ isActive === index } 
                                    getIndex={handleClick}
                                   
                                    
                                />
                                
                            ))}
                    
                    </div>
                   
                <div className="nav__burger">
                    <GiHamburgerMenu onClick={handleMenu} size={48}/>
                    {/* <img className="nav__burger__img" src={require("../../img/menu.png")} alt="menu-icon" onClick={handleMenu}/> */}
                </div>
                <div className={menu?"nav__sideBar--hide":"nav__sideBar"}>

                          {links.map((link, index)=>(
                                
                                <NavigationLink 
                                    key={ index } 
                                    text={ link.text } 
                                    url={ link.url } 
                                    index={ index } 
                                    isActive={ isActive === index } 
                                    getIndex={handleClick}
                                    
                                />
                                
                            ))}


                </div>
                <div id="#portfolio"></div>
            </nav>
       
    )
}
