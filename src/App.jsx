import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import playDark from './assets/play-button-dark.svg'
import user from "./assets/user.png"
import './App.scss'

import LoadingSpinner from './LoadingSpinner'

function App() {
  const [active, setActive] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/math-course" element={<MathCourse active={active} setActive={setActive} />} />
        <Route path="/programming-course" element={<ProgrammingCourse active={active} setActive={setActive} />} />
      </Routes>
    </BrowserRouter>
  ); 
}

function Homepage() {
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

function MathCourse({ active, setActive }) {

  const [videoId, setVideoId] = useState('');
  const [loading, setLoading] = useState(true);
  
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='video'>
         <div className='header'>
           <h2 className='title'>Math Course</h2>
           <Link to={'/'} className='back'>Back</Link>
          </div>
          <div className='iframe-container'>
           <div className={`${!loading ? 'hide' : ''} spinner-container`}>
            <LoadingSpinner />
           </div>
           <iframe className={`${loading ? 'hide' : ''}`} onLoad={() => setLoading(false)}  src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div> 
          <h3 className='title'>Description</h3>
          <p>COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias debitis dignissimos quis, aut ducimus laboriosam quibusdam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illo! Non similique aspernatur quibusdam consequuntur repellendus delectus omnis blanditiis quisquam, ad porro. Sunt corporis cum nesciunt aliquam tempora totam tempore.</p>
          <div className='comments-container'>
            <h3 className='title'>Comments</h3>
            { mathComments.map(item => (
              <div className='comment'>
                <img className='user' src={user} alt="" />
                <div className='message-container'>
                    <p className='message-title'>{item.title}</p>
                    <p className='message'>{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='sections'>
          <h2 className='title'>Course Overview</h2>
          <div className='section'>
            { mathData.map(item => (
              <div 
                className={`${active && videoId === item.url ? 'active' : ''} inside-section`} 
                onClick={
                  () => {
                    setActive(true)
                    setVideoId(item.url)
                    setLoading(true)
                  }
                }
              >
                <span className='intro'>{item.title}</span>
                <div className='time'>
                  <img className='circled' src={playDark} alt='' />
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProgrammingCourse({ active, setActive }) {

  const [videoId, setVideoId] = useState('');
  const [loading, setLoading] = useState(true);

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='video'>
         <div className='header'>
           <h2 className='title'>Math Course</h2>
           <Link className='back' to={'/'} >Back</Link>
          </div>
          <div className='iframe-container'>
           <div className={`${!loading ? 'hide' : ''} spinner-container`}>
            <LoadingSpinner />
           </div>
           <iframe className={`${loading ? 'hide' : ''}`} onLoad={() => setLoading(false)}  src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div> 
          <h3 className='title'>Description</h3>
          <p>COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias debitis dignissimos quis, aut ducimus laboriosam quibusdam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illo! Non similique aspernatur quibusdam consequuntur repellendus delectus omnis blanditiis quisquam, ad porro. Sunt corporis cum nesciunt aliquam tempora totam tempore.</p>
          <div className='comments-container'>
            <h3 className='title'>Comments</h3>
            { mathComments.map(item => (
              <div className='comment'>
                <img className='user' src={user} alt="" />
                <div className='message-container'>
                    <p className='message-title'>{item.title}</p>
                    <p className='message'>{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='sections'>
          <h2 className='title'>Course Overview</h2>
          <div className='section'>
            { programmingData.map(item => (
              <div 
                className={`${active && videoId === item.url ? 'active' : ''} inside-section`} 
                onClick={
                  () => {
                    setActive(true)
                    setVideoId(item.url)
                    setLoading(true)
                  }
                }
              >
                <span className='intro'>{item.title}</span>
                <div className='time'>
                  <img className='circled' src={playDark} alt='' />
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;


const mathData = [
 {
   title: 'Section 1: Video Intro',
   url: 't5pQSNVQIeo',
   time: '17 Min'
 },
 {
   title: 'Section 2: Maths',
   url: 'XHJ0et9fmJ4',
   time: '11 Min'
 },
 {
  title: 'Section 3: Calculus',
  url: 'w3UbdHhSzxs',
  time: '5 Min'
 },
 {
  title: 'Section 4: Logarithm',
  url: 'ao4RCon11eY',
  time: '7 Min'
},
{
  title: 'Section 5: Exponential',
  url: 'g2WG9r0PcLo',
  time: '9 Min'
},
{
  title: 'Section 6: Funtions',
  url: 'h3h035Eyz5A',
  time: '14 Min'
},
{
  title: 'Section 7: Arrays',
  url: 'LV3ILLgEHwM',
  time: '4 Min'
}
] 

const programmingData = [
  {
    title: 'Section 1: Video Intro',
    url: 't5pQSNVQIeo',
    time: '17 Min'
  },
  {
    title: 'Section 2: Programming',
    url: 'XHJ0et9fmJ4',
    time: '11 Min'
  },
  {
   title: 'Section 3: Algorithms',
   url: 'w3UbdHhSzxs',
   time: '5 Min'
  },
  {
    title: 'Section 4: Logarithm',
    url: 'ao4RCon11eY',
    time: '7 Min'
  },
  {
    title: 'Section 5: Exponential',
    url: 'g2WG9r0PcLo',
    time: '9 Min'
  },
  {
    title: 'Section 6: Funtions',
    url: 'h3h035Eyz5A',
    time: '14 Min'
  },
  {
    title: 'Section 7: Arrays',
    url: 'LV3ILLgEHwM',
    time: '4 Min'
  }
 ] 

 const mathComments = [
  {
    title: 'change to fs.writeFileSync',
    message: 'If you are using the newest version of node and not the LTS version you must also provide a data arg',
  },
  {
    title: 'Windows - MongoDB installation instructions',
    message: 'Hello everyone,If you are using Windows while following the course, you can find the instructions on how to set up your coding environment on this link.Specifically, MongoDB installation instructions for Windows can be found on this page (the attached video tutorial there is recommended).If you have any questions, feel free to create a new thread with all the details about it so we can help out further!Kind regards,Zarko',
  },
  {
    title: 'Where can I find the answers to the course quizzes and exercises?',
    message: 'Please see here for answers to all of the course quizzes and exercises.',
  }
 ] 
