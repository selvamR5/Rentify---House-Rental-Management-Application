import './Contact.css'
import { useState, useRef } from 'react'
import emailjs from 'emailjs-com'


function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [description, setDescription] = useState('')
  
    const form = useRef()
  
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm(
          'service_jmojtdc',
          'template_sxk3jan',
          form.current,
  
          'E2Zcu2kbQDxSPiPd5'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
    return (
        <form ref={form} className="contact-form">
          <div className="form-row">
            <h2 className='contactproperty'> Contact Property</h2>
            <div className="name-container">
  <div className="col">
    <input
      onChange={(e) => {
        setFirstName(e.target.value)
      }}
      type="text"
      className="form-control"
      placeholder="First name"
      name="firstname"
    />
  </div>
  <div className="col">
    <input
      onChange={(e) => {
        setLastName(e.target.value)
      }}
      type="text"
      className="form-control"
      placeholder="Last name"
      name="lastname"
    />
  </div>
</div>

 <div className="name-container">         
<div className="col">
              <input
onChange={(e) => {
    setEmail(e.target.value)
  }}
  type="text"
  className="form-control"
  placeholder="Email Address"
  name="email"
/>
</div>
<div className="col">
<input
  onChange={(e) => {
    setMobile(e.target.value)
  }}
  type="text"
  className="form-control"
  placeholder="Mobile Number"
  name="mobile"
/>
</div>
</div>
<div className="col">
  <input
    onChange={(e) => {
      setDescription(e.target.value)
    }}
    type="text"
    className="form-control description-box"
    placeholder="Description"
    name="description"
  />
</div>
</div>
<button type="button" className="btn btn-primary" onClick={sendEmail}>
Submit
</button>
</form>

)
}

export default Contact
