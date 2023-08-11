import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './home/Home'
import Todo from './todo/Todo'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path = '/todo' element = {<Todo/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

