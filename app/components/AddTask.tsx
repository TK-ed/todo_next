import { RiCalendarTodoLine } from 'react-icons/ri'
const AddTask = () => {
  return (
    <button className="btn btn-primary w-full">Add task here 
    <RiCalendarTodoLine className='ml-2' size={18} />
    </button>
  )
}

export default AddTask