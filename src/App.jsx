import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetail from './components/ExerciseDetail';
import './index.css'

const App = () => {
  return (
    <div className="w-[400px] lg:w-[1488px] m-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
