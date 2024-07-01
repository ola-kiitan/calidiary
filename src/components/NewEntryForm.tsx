import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntry } from '../state/diarySlice'
import Dropdown from './Dropdown'
import '../styles/form.css'

interface NewEntry {
  id: number
  date: Date
  content: string
  tags: string[]
}
export const possibleTags = ['sport', 'study', 'work', 'hobby']

const NewEntryForm = () => {
  const [content, setContent] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const dispatch = useDispatch()

  const handleSelectionChange = (selected: string[]) => {
    setSelectedTags(selected)
  }

  const validateForm = (): boolean => {
    if (!content.trim()) {
      setErrorMessage('Content is required.')
      return false
    }
    setErrorMessage(null)
    return true
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateForm()) {
      return
    }
    const id = Math.floor(Math.random() * 10000)
    const newEntry: NewEntry = {
      date: date ? new Date(date) : new Date(),
      content,
      id: id,
      tags: selectedTags,
    }
    dispatch(addEntry(newEntry))
    setContent('')
    setDate('')
    setSelectedTags([])
  }

  return (
    <form className='new-entry-form' onSubmit={handleSubmit}>
      {errorMessage && <div className='error'>{errorMessage}</div>}
      <textarea
        name='content'
        onChange={(event) => setContent(event.target.value)}
        id='content'
        className='content-input'
        value={content}
        placeholder='Write your entry here...'
      >
        {content}
      </textarea>
      {selectedTags.map((tag) => (
        <span key={tag} className='selected-tag'>
          {tag}
        </span>
      ))}
      <Dropdown
        options={possibleTags}
        selectedTags={selectedTags}
        onSelectionChange={handleSelectionChange}
      />
      <div className='form-footer'>
        <input
          type='date'
          id='date'
          value={date}
          className='date-input'
          onChange={(event) => setDate(event.target.value)}
        />
        <button type='submit'>Add Entry</button>
      </div>
    </form>
  )
}

export default NewEntryForm
