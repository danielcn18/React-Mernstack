import { useState } from 'react';
import CreateStudent from './Components/CreateStudent';
import EditStudent from './Components/EditStudent';
import StudentList from './Components/StudentList';
import {Routes, Route, Link} from 'react-router-dom';
import './Styles/App.css';

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

export default App;