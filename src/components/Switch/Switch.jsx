import React,{ useState, useEffect} from 'react';
import { WiDaySunny } from "react-icons/wi";
import { FiMoon } from "react-icons/fi";

export default function Switch({handleMode}) {
    const [mode, setMode] = useState(true);


    useEffect(() => {
        handleMode(mode)
      }, [mode]);

    const modeChange=()=>{

        mode?setMode(false):setMode(true);
        
    }


    return (
        <div className="switch">
            <div onClick={modeChange} className={mode?"switch__ball":"switch__ball switch__ball--dark"}>
            {mode?<WiDaySunny size={32} />:<FiMoon />}
            </div>
        </div>
    )
}
