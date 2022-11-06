import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Modal from '../components/Modal/Modal'
import '../pages/Welcome.scss'
import '../components/Modal/Modal.scss'

let image1 = require('../assets/Solidaire.png');
let image2 = require('../assets/eleves.png');
let image3 = require('../assets/entrreaid.png');

const Welcome = () => {
  return (
    <div>
      <header className="App-header">
        <NavBar></NavBar>
        <Modal>
          <div>
          <div className='modalHeader'>
            <h5 className='heading'>Welcome to "Digital forum"</h5>
          </div>
          
          <div className='modalContent'>
          A place where you can share and discuss issues in your community and communities around the world
          </div>
          <button className="centered button4">Let's get started</button>
          <div></div>
          <div className="row">
            <div className="column">
              <img className='image' src={image3} alt=""></img>
            </div>
            <div className="column">
              <img className='image' src={image2} alt=""></img>
            </div>
            <div className="column">
              <img className='image' src={image1} alt=""></img>
            </div>
            </div>
          </div>
          
            
          </Modal>
      </header>
    </div>
  )
}

export default Welcome