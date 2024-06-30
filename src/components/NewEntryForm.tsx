import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntry } from '../diarySlice'
import Dropdown from './Dropdown'
import '../styles/form.css'

interface NewEntry {
  id: number
  date: Date
  content: string
  tags: string[]
}
const NewEntryForm = () => {
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const dispatch = useDispatch()
  const possibleTags = ['sport', 'study', 'work', 'hobby']
  const handleSelectionChange = (selected: string[]) => {
    setSelectedTags(selected)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Generate a unique 'id' for each entry
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
