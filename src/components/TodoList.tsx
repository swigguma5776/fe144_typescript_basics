import React, { useState } from 'react';

// declare a Type Alias
// the shape of our Todo data 
type Todo = {
    id: number,
    task: string,
    completed: boolean,
    dueDate?: string // ? makes an optional property
}

// make sure our functions we declare them as Functional Component Types
const TodoList: React.FC = () =>{
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>('')
  
  const addTodo = (): void => {
    if (newTask) {
      const newTodo: Todo = {
        id: todos.length + 1,
        task: newTask,
        completed: false 
      }
      setTodos([...todos, newTodo])
      setNewTask('')
    }
  }
  
  const deleteTodo = (id: number): void => {
    let prevTodos: Todo[] = [...todos]
    prevTodos = prevTodos.filter((todo) => todo.id !== id)
    setTodos(prevTodos)
  }
  
  
  const toggleComplete = (id: number): void => {
    let prevTodos: Todo[] = [...todos]
    const index: number = prevTodos.findIndex((todo) => todo.id == id)
    prevTodos[index].completed = !prevTodos[index].completed 
    setTodos(prevTodos)
    
  }
  
  return (
    <div className='mt-4 mx-4'>
      <h2>Your Todo List:</h2>
      <ul className='list-group'>
        {todos.map((todo: Todo) => (
          <li key={todo.id} className='list-group-item d-flex align-items-center'>
            <input 
              type='checkbox'
              checked={todo.completed}
              onChange={()=>toggleComplete(todo.id)}
              className='form-check-input me-2'
            />
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none'}} 
              className='flex-grow-1 mt-1'>
                {todo.task}
            </span>
            <button 
              className='btn btn-danger rounded'
              onClick={()=> deleteTodo(todo.id)}>Delete Task</button>
          </li> 
        ))}
      </ul>
      <div className='mt-4'>
        <h4>Add Your Todos:</h4>
        <input
          type='text'
          onChange={(event)=>setNewTask(event.target.value)}
          className='form-control'
          placeholder='Task Name'
        ></input>
        <button 
          className='btn btn-primary rounded mt-2' 
          onClick={addTodo}
        >Add Task</button>
      </div>
      
    </div>
  )
}

export default TodoList; 
