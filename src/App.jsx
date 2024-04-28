import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

function App() {

  return (
    <>
      <h1 style={{background:'#ba8fff'}}>Redux Tool kit</h1>
      <NewTodo />
      <TodoList />
    </>
  )
}

export default App
