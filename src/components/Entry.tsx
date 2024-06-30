import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeEntry } from '../diarySlice'
import deleteIcon from '../assets/delete.svg'
import Modal from './Modal'
import '../index'

interface EntryProps {
  id: number
  date: Date
  content: string
  tags: string[]
}
const Entry: React.FC<EntryProps> = ({ date, content, tags, id }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  const handleDelete = () => {
    setModalOpen(true)
  }
  const handleConfirmDelete = () => {
    setModalOpen(false)
    dispatch(removeEntry(id))
  }

  return (
    <>
      <article className='article-card'>
        <p className='article-card-tags'>
          {tags.map((tag) => (
            <span key={tag} className='selected-tag'>
              {tag}
            </span>
          ))}
        </p>
        <p className='article-card-content'>{content}</p>
        <time className='article-card-date' dateTime={date.toISOString()}>
          {date.toDateString()}
        </time>
        <img
          src={deleteIcon}
          alt='delete-icon'
          className='article-card-delete'
          onClick={handleDelete}
        ></img>
      </article>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  )
}
export default Entry
