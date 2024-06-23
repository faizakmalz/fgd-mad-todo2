import React, { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

export const TodoContext = createContext()

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);

  // console.log(todos);

  const toggleCompleted = (todoId) => {
    // console.log(todoId);
    const updatedTodos = todos.map((todo) => {
      if(todo.id === todoId) {
        todo.completed = !todo.completed
        // console.log("true")
      } // else {
      //   todo.completed = false
      // }
      return todo
    })
    setTodos(updatedTodos)
  }

  // Menambahkan fitur delete task
  const deleteTodo = (todoId) => {
    const newTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(newTodos)
  }

  const addTodo = (todoTitle) => {
    if(todoTitle === '') {
      return
    }

    const newTodos = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodos)
    setTodos(updatedTodos)
  }

  return(
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div style={{textAlign:"center", padding:"12px"}}>
        <h1 style={{fontSize: "36px"}}>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos 
          todos={todos} 
          // toggleCompleted={toggleCompleted} 
          // deleteTodo={deleteTodo}
        />
      </div>
    </TodoContext.Provider>
  )
}

export default App