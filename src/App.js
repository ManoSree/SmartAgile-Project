import React from 'react';
import './App.css';
import Navbar  from './Pages/Navbar';
import Sidebar from './Pages/Sidebar';
import Dashboard from './Pages/Dashboard';
import Project from './Pages/Project';
import Taskhub from './Pages/Taskhub';
import Chat from './Pages/Chat';
import Settings from './Pages/Settings';
import {Routes,Route} from 'react-router-dom';
// import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
      
      <div className='flex flex-col h-screen'>
      <Navbar/>
      <div className='flex flex-grow '>
        <Sidebar />
        
   
      </div>
     
      <Routes>
        <Route path='/' element={<Dashboard/>}/> 
        <Route path='/project' element={<Project/>}/> 
        <Route path='/taskhub' element={<Taskhub/>}/> 
        <Route path='/chat' element={<Chat/>}/> 
        <Route path='/settings' element={<Settings/>}/> 
        </Routes>
       
      </div>
      {/* <Login/> */}
    </div>
  );
} 

export default App;
