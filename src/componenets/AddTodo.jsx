import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'
import { useState } from 'react';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        dispatch(addTodo(input));
        setInput('');
    }

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
