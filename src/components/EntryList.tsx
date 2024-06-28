import Entry from './Entry'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'

const EntryList: React.FC = () => {
  const entries = useSelector((state: any) => state.diary.entries)
  const [filterTag, setFilterTag] = useState('')

  return (
    <section className='entry-list'>
      <input
        type='text'
        placeholder='Filter by tag...'
        value={filterTag}
        onChange={(e) => setFilterTag(e.target.value)}
      />
      <table className='entry-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Content</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries
            .slice()
            .filter(
              (entry: any) => filterTag === '' || entry.tags.includes(filterTag)
            )
            .sort(
              (a: any, b: any) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((entry: any, i: number) => (
              <Entry id={i} key={entry.date.toString()} {...entry} />
            ))}
        </tbody>
      </table>
    </section>
  )
}

export default EntryList
