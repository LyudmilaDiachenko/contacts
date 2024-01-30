import './App.css';
import { useState } from 'react'
import Contacts from './components/contacts';
import CreateContact from './components/create_contact';

function App() {
  const key = 'contacts'
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(key)) || [])

  const [currentIndex, setCurrentIndex] = useState()



  const onChange = contacts => {
    localStorage.setItem(key, JSON.stringify(contacts))
    setContacts(contacts)
  }

  return (
    <div className="App">
      <Contacts contacts={contacts} onChange={onChange} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <CreateContact contacts={contacts} onChange={onChange} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
}

export default App;
