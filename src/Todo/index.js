import React, { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, addTodo } from './todoSlice'

function Todo() {
    const inputRef = useRef()
    const [todoName, setTodoName] = useState('')

    const dispath = useDispatch()
    const todoList = useSelector(state => state.todos)

    const handleAddTodo = () => {
        const action = addTodo({
            id: v4(),
            name: todoName,
        })
        dispath(action)
        setTodoName('')
    }

    const handleRemoveTodo = (todo, idx) => {
        const action = removeTodo(idx)
        dispath(action)
    }

    const handleInputChange = (e) => {
        setTodoName(e.target.value)
    }

    return (
        <div className='todo'>
            <ul>
                {todoList.map((todo, idx) => (
                    <li key={todo.id}
                        onClick={() => handleRemoveTodo(todo, idx)}>
                        {todo.name}
                    </li>
                ))}
            </ul>
            <br />
            <div>
                <label>Add todo</label>
                <input
                    ref={inputRef}
                    value={todoName}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Add todo...'
                    style={{
                        margin: 10,
                        padding: 10
                    }}
                />
                <button onClick={handleAddTodo} style={{ padding: 10, cursor: 'pointer' }}>Add</button>
            </div>
        </div>
    )
}

export default Todo
