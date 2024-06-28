import { useDispatch } from 'react-redux'
import { removeEntry } from '../diarySlice'

interface EntryProps {
  id: number
  date: Date
  content: string
  tags: string[]
}
const Entry: React.FC<EntryProps> = ({ date, content, tags, id }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeEntry(id))
  }

  return (
    <tr>
      <td>
        <time dateTime={date.toISOString()}>{date.toDateString()}</time>
      </td>
      <td>{content}</td>
      <td>{tags.join(', ')}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  )
}
export default Entry
