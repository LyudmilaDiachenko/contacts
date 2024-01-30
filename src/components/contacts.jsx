import React from 'react'
import edite from "../assets/icon-edit.png"
import del from "../assets/icon-delete.png"

export default function Contacts(props) {
  let onDelete = (index) => {
    props.onChange(props.contacts.filter((el, i) => i !== index))
  }
  return (
    <div className='contacts_container'>
      <div className="title_container">
        <h1>Contacts</h1>
      </div>
        {props.contacts.map((contact, index) => 
          <div className={`list_container ${props.currentIndex === index ? "grey" : ""}`} key={index}>
            <div className='list'>
              <div className='item-container'>
                <p className='item'>{contact.firstName}</p>  
                <p className='item'>{contact.lastName}</p>
                <p className='item'>{contact.email}</p>
              </div>
              <div className='item-container'>
                <p className='item'>{contact.tel}</p>                
              </div>
              <div className="button_container">
                <button className='btn' onClick={() => props.setCurrentIndex(index)}>
                  <img src={edite} alt="" className='icon_edite' />
                </button>
                <button className='btn' onClick={() => onDelete(index)}>
                  <img src={del} alt="" className='icon_del' />
                </button>
              </div>
            </div>            
          </div>  
        )}
    </div>
  )
}
