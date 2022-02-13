import './App.css'
import image from './assets/one.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'

function App() {
  return (
    <div className="container">
      <div className='wrapper'>
        <div className='image-container'>
           <img src={image} />
        </div>
        <div className='image-container'>
          <img src={image2} />
        </div>
        <div className='image-container' >
          <img src={image3} />
        </div>
        <div className='image-container'>
          <img src={image4} />  
        </div>
        <div className='image-container'>
          <img src={image5} />
        </div>
      </div>
    </div>
  );
}

export default App;
