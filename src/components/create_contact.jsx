import React, { useState } from 'react'
import "../App.css"
import img from "../assets/icon-human.png"

export default function CreateContact(props) {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")

  function onChangeFirstName(e) {
    setFirstName(e.target.value)
  }  
  function onChangeLastName(e) {
    setLastName(e.target.value)
  }  
  function onChangeEmail(e) {
    setEmail(e.target.value)
  }  
  function onChangeTel(e) {
    setTel(e.target.value)
  }
  function onSubmit(e) {
    e.preventDefault()
    props.onChange([
      ...props.contacts, 
      {
        firstName,
        lastName,
        email,
        tel
      }
    ])

    setFirstName("")
    setLastName("")
    setEmail("")
    setTel("")
  }

  return (
    <div className='container'>
        <div className='title_container'>
            <div className='img_container'>
                <img src={img} alt="icon" />
                <h1>Create new contact</h1>                
            </div>
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Name'
              value={firstName}
              onChange={onChangeFirstName}
            />
            <input type='text' placeholder='Last name'
              value={lastName}
              onChange={onChangeLastName}
            />
            <input type='email' placeholder='Email'
              value={email}
              onChange={onChangeEmail}
            />
            <input type='tel' placeholder='Tel'
              value={tel}
              onChange={onChangeTel}
            />
            <button type='submit'>Save</button>
        </form>
      </div>
    </div>
  )
}
