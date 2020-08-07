import React , { useState} from 'react';
import './ContactMe.scss';

export default function ContactMe() {

  const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleEmail=(e)=>{
        
        setEmail(e.target.value)
    }
    const handleName=(e)=>{
        
        setName(e.target.value)
    }
    const handleText=(e)=>{
        
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{

        e.preventDefault();
        if(name&&email&&text!==''){
             sendData()
        }else{
            console.log('fill the stuf')
        }
    
    }
    const sendData=()=>{

        fetch('http://www.contactform.test/api/contact',{
            method:'post',
            body:JSON.stringify(
                {email,name,text}
            ),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }).then(function(response){
            response.json().then(function(resp){
                console.log(resp)
            })
        })
        setText('')
        setEmail('')
        setName('')

    }
    return (
      
      <section id="contact" className="contact">
        <h2 className="contact__heading">CONTACT ME</h2>
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" onChange={handleName} name="name" value={name} className="form__input" placeholder="Name*"/>
        
            <input type="email" onChange={handleEmail} name="email" value={email} className="form__input" placeholder="Email*"/>
            
            <label className="form__label">Message*</label>
            <textarea onChange={handleText} name="text" value={text} className="form__text"></textarea>
            <button type="submir" className="form__submit">Send</button>
        </form>

      </section>
    
    )
}
