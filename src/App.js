import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar.tsx'
import UsersList from './components/UsersList.tsx'
import Edit from './components/Edit.tsx'

function App() {
  return (
     <Router>
      <ResponsiveAppBar/>
      <Routes>
       
        <Route path='/' element={<UsersList/>} />
        <Route path='/:id' element={<Edit/>} />
      </Routes>
    </Router>
  );
}

export default App;
