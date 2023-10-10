import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CreateStudent from './components/CreateStudent.js'
import EditStudent from './components/EditStudent.js'
import StudentList from './components/StudentList.js'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul>
          <li><Link to='/create-student'>Create Student</Link></li>
          <li><Link to='/student-list'>View Students</Link></li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
        <Route path='/create-student' element={<CreateStudent />} />
          <Route path='/edit-student/:id' element={<EditStudent />} />
          <Route path='/student-list' element={<StudentList />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
