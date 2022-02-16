import React from 'react'
import { BrowserRouter, Routes, Route, Link, createRoutesFromChildren } from 'react-router-dom'
import down from './assets/down.svg'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/math-course" element={<MathCourse />} />
        <Route path="/programming-course" element={<ProgrammingCourse />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export function Homepage() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className="card">
          <div className="content">
            <h2 className="title">Math Course</h2>
            <p className="copy">This course contains everything you need related to maths</p>
            <button className="btn"><Link className='link' to={'/math-course'}>View Course</Link></button>
          </div>
        </div>
        <div className="card2">
          <div className="content">
            <h2 className="title">Programming Course</h2>
            <p className="copy">This course contains everything you need related to programming and algorithms</p>
            <button className="btn"><Link className='link' to={'/programming-course'}>View Course</Link></button>
          </div>
        </div>
      </div>
  </div>
  )
}

function MathCourse() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='video'>
         <div className='header'>
           <h2 className='title'>Math Course</h2>
           <Link to={'/'} className='link'>Back</Link>
          </div>
          <iframe src="https://www.youtube.com/embed/7Xn7pTBFTq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3 className='title'>Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias debitis dignissimos quis, aut ducimus laboriosam quibusdam. Mollitia enim, ea animi assumenda quod placeat illo dicta nam, quidem ipsum repellendus.</p>
        </div>
        <div className='sections'>
          <h2 className='title'>Course Overview</h2>
          <div className='section'>
            <div className='inside-section'>
              <h4>Section 1 : Course Introduction</h4>
              <img className='image' src={down} alt="" />
            </div>
            <span>31 Min</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProgrammingCourse() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='video'>
          <div className='header'>
           <h2 className='title'>Programming Course</h2>
           <Link to={'/'} className='link'>Back</Link>
          </div>
          <iframe src="https://www.youtube.com/embed/1LrXsP4xSEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3 className='title'>Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias debitis dignissimos quis, aut ducimus laboriosam quibusdam. Mollitia enim, ea animi assumenda quod placeat illo dicta nam, quidem ipsum repellendus.</p>
        </div>
        <div className='sections'>
          <h2 className='title'>Course Overview</h2>
          <div className='section'>
            <div className='inside-section'>
              <h4>Section 1 : Course Introduction</h4>
              <img className='image' src={down} alt="" />
            </div>
            <span>31 Min</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

