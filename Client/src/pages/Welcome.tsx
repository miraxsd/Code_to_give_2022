import React, { useCallback, useRef } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Modal from '../components/Modal/Modal'
import '../pages/Welcome.scss'
import '../App.scss'
import '../components/Modal/Modal.scss'
import Background from '../components/Background/Background'
import { useNavigate } from 'react-router-dom'

let image1 = require('../assets/Solidaire.png');
let image2 = require('../assets/eleves.png');
let image3 = require('../assets/entrreaid.png');
let map = require('../assets/map-background.jpg');

const Welcome = () => {

  let navigate = useNavigate();
  
  return (
    <div className='App welcome-page'>
      <header className="App-header">
        <NavBar />
      </header>
      <div className='app-body'>
        <Background >
          <section>
            <div className='map-background'>
              <img className='map-img' src={map} alt='' />
            </div>
            <Modal overlay={true} width='1000px' height='680px'>
              <div className='welcome-modal'>
                <div className='modal-header'>
                  <h1>Welcome to Digital forum</h1>
                </div>
                <div className='welcome-modal-content'>
                  <div className='welcome-message'>
                    <p>
                      A place where you can share and discuss issues in your community and communities around the world
                    </p>
                    <button className="modal-button" onClick={()=> navigate('/share', {replace: true})}>Let's get started</button>
                  </div>
                  <div className="welcome-images">
                    <img src={image3} alt=""></img>
                    <img src={image2} alt=""></img>
                    <img src={image1} alt=""></img>
                  </div>
                </div>
              </div>
            </Modal>
          </section>
        </Background>
      </div>
    </div>
  )
}

export default Welcome