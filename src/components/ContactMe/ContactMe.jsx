import React, {useState} from 'react'
import ReactGa from 'react-ga';

import './ContactMe.scss'

export default function ContactMe() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [success, setSuccess] = useState(true)
  const [field, setField] = useState(true)
  const [shower, setShower] = useState(false)
  const [confirm, setConfirm] = useState(true)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleText = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    ReactGa.event({
      category:'Button',
      action:'contact sent',
    })
    if (name && email && text !== '') {
      sendData()
    } else {
      setField(false)
    }
  }
  const handleClick = () => {
    setSuccess(true)
    setShower(false)
  }
  const sendData = () => {
    setShower(true)
    setConfirm(false)
    fetch('https://api.joaquingarcia.tech/api/contact', {
      method: 'post',
      body: JSON.stringify({email, name, text}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(function (response) {
      response.json().then(function (resp) {
        console.log(resp)
        if (resp !== undefined) {
          setSuccess(false)
          setShower(true)
          setConfirm(true)
        }
      })
    })
    setText('')
    setEmail('')
    setName('')
  }

  /*const reveal=()=>{
        shower?setShower(false):setShower(true)

    }*/

  return (
    <>
      {/* <section id="contact" className="contact">
                <h2 className="contact__heading">CONTACT ME</h2>

                <p className="contact__confirm">Currently, the backend is not deployed yet on this portfolio, so the contact form I have created is not working yet in production, it will be soon, stay tunned....</p>
                <p className="contact__confirm">In the meantime, you can reach me on my email <button className="show" onClick={reveal}>show email</button></p>
                <div className="contact__email">
                <p className="contact__email--text" hidden={shower}> garcia.nieto.joaquin@gmail.com</p>
                </div>

            </section>
 */}

      {success ? (
        <section id="contact" className="contact">
          <h2 className="contact__heading">CONTACT ME</h2>
          {field ? (
            ''
          ) : (
            <p className="contact__heading--fail">
              Please, check the fields and try again
            </p>
          )}
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleName}
              name="name"
              value={name}
              className="form__input"
              placeholder="Name*"
            />
            <input
              type="email"
              onChange={handleEmail}
              name="email"
              value={email}
              className="form__input"
              placeholder="Email*"
            />
            <label className="form__label">Message*</label>
            <textarea
              onChange={handleText}
              name="text"
              value={text}
              className="form__text"
            ></textarea>
            <button hidden={shower} type="submit" className="form__submit">
              Send
            </button>
            <div hidden={confirm} className="contact__confirm">
              <h1>Sending data, please wait...</h1>
            </div>
          </form>
        </section>
      ) : (
        <section id="contact" className="contact">
          <h2 className="contact__heading">SUCCESS!!</h2>
          <p className="contact__confirm">
            Thanks for contacting me, check your inbox, you should have received
            an email, if it is not the case, please reach me on the email
            address:{' '}
            <span className="contact__email--text">
              garcia.nieto.joaquin@gmail.com
            </span>{' '}
          </p>
          <p className="contact__confirm">Thanks!</p>
          <button className="form__submit" onClick={handleClick}>
            Accept
          </button>
        </section>
      )}
    </>
  )
}
