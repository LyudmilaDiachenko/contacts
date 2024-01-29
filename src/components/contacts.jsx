import React from 'react'

export default function Contacts(props) {
  return (
    <div>
        {props.contacts.map((contact, index) => 
          <div className='row' key={index}>
            <div className='col'>
              {contact.firstName}
            </div>  
            <div className='col'>
              {contact.lastName}
            </div> 
            <div className='col'>
              {contact.email}
            </div>  
            <div className='col'>
              {contact.tel}
            </div>  
          </div>  
        )}
    </div>
  )
}
