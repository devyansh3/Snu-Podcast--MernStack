import React from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Navigation from './components/shared/Navigation/Navigation';
import Home from './pages/Home/Home'
import './App.css';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    
    <Router>
      <Navigation/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>


    </Routes>
    </Router>
  );
}

export default App;
