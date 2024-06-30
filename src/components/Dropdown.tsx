import React, { useState } from 'react'
import tagIcon from '../assets/tag.svg'
import '../styles/form.css'

interface DropdownProps {
  options: string[]
  onSelectionChange: (selected: string[]) => void
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelectionChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const toggleDropdown = () => setIsOpen(!isOpen)
  const closeDropdown = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsOpen(false)
  }

  const handleOptionChange = (option: string) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option]
    setSelectedOptions(newSelectedOptions)
    onSelectionChange(newSelectedOptions)
  }
  return (
    <div>
      <div className='tag-label' onClick={toggleDropdown}>
        <img src={tagIcon} alt='tag' /> <p>Add tags</p>
      </div>
      {isOpen && (
        <div className='tag-dropdown'>
          {options.map((option) => (
            <label key={option} className='tag-dropdown-item'>
              <input
                type='checkbox'
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <p>{option}</p>
            </label>
          ))}
          <span className='close' onClick={closeDropdown}>
            X
          </span>
        </div>
      )}
      <div></div>
    </div>
  )
}

export default Dropdown
