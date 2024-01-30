import React, { useState } from 'react'
import "../App.css"
import img from "../assets/icon-human.png"

export default function CreateContact(props) {

  const [firstName, setFirstName] = useState(props.contacts[props.currentIndex]?.firstName)
  const [lastName, setLastName] = useState(props.contacts[props.currentIndex]?.lastName)
  const [email, setEmail] = useState(props.contacts[props.currentIndex]?.email)
  const [tel, setTel] = useState(props.contacts[props.currentIndex]?.tel)

  const [lastIndex, setLastIndex] = useState()

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
    let contacts = props.contacts
    if (props.currentIndex !== null){
      contacts = props.contacts.filter((el, i) => i !== props.currentIndex)
    }

    props.onChange([
      ...contacts, 
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

    props.setCurrentIndex(null)
  }

  if (props.currentIndex !== null && lastIndex !== props.currentIndex){
    setFirstName(props.contacts[props.currentIndex]?.firstName)
    setLastName(props.contacts[props.currentIndex]?.lastName)
    setEmail(props.contacts[props.currentIndex]?.email)
    setTel(props.contacts[props.currentIndex]?.tel)
    setLastIndex(props.currentIndex)
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
            <button type='submit' className='button_submit'>Save</button>
        </form>
      </div>
    </div>
  )
}