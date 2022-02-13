import React from 'react'
import { BrowserRouter, Routes, Route, Link, createRoutesFromChildren } from 'react-router-dom'
import './App.css'

import image from './assets/one.jpg'
import image2 from './assets/2.jpg'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/course" element={<Coursepage />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export function Homepage() {
  return (
    <div className="container">
      <div className='wrapper'>
        <div className='image-container'>
          <img src={image} />
          <Link to={'/course'}>Show details</Link>
          <div className='overlay'>
            <h1>hello</h1>
          </div>
          <p>lorem impsum</p>
        </div>
        <div className='image-container'>
          <img src={image2} />
          <Link to={'/course'}>Show details</Link>
          <div className='overlay'>
            <h1>hello</h1>
          </div>
          <p>lorem impsum</p>
        </div>
      </div>
  </div>
  )
}

export function Coursepage() {
  return (
    <div>
      Video Player
    </div>
  )
}

export default App;

