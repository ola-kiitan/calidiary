import React, { useState } from 'react'
import NewEntryForm from './NewEntryForm'
import '../styles/header.css'

const Header: React.FC = () => {
  const [showNewEntryForm, setShowNewEntryForm] = useState(false)

  const handleToggleNewEntryForm = () => {
    console.log('showNewEntryForm', showNewEntryForm)
    setShowNewEntryForm(!showNewEntryForm)
  }

  return (
    <header>
      <div className='app-logo'>
        <div className='logo'>
          <h3>Calidiary</h3>
        </div>
        <span
          role='button'
          className='header-button'
          onClick={handleToggleNewEntryForm}
        >
          <h2>+</h2>
          <span className='hover-text'>Add Entry</span>
        </span>
      </div>
      {showNewEntryForm && <NewEntryForm />}
    </header>
  )
}

export default Header
