import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Background from '../components/Background/Background'
import Modal from '../components/Modal/Modal'
import NavBar from '../components/NavBar/NavBar'
import '../pages/Share.scss'

let map = require('../assets/map-background.jpg');
let challenge = require('../assets/goal.png');
let issue = require('../assets/problem.png')

const Share = () => {

    let navigate = useNavigate();
    const [step, setStep] = useState(1);

    const typesForm = () => {

        return (
            <div className='types-modal'>
              <div className='modal-header'>
                <h1>Start by selecting a category</h1>
                <button className="types-modal-button" onClick={()=> navigate('/', {replace: true})}>Share Later <FaArrowRight color='white' size={20} /></button>
              </div>
              <div className='types-modal-content'>
                <div className='types-challenge'>
                    <p className='types-title'>Challenge</p>
                    <p className='types-description'>Share a current challenge you’re facing to start a discussion.</p>
                    <img src={challenge} alt=''/>
                    <button className='types-button'>Select this option</button>
                </div>
                <p className='versus'>VS</p>
                <div className='types-issue'>
                    <p className='types-title'>Issue</p>
                    <p className='types-description'>Share a current issue you’re facing to start a discussion.</p>
                    <img src={issue} alt=''/>
                    <button className='types-button'>Select this option</button>
                </div>
              </div>
            </div>
        )
    }

    const contentForm = () => {

        return (
            <div></div>
        )
    }

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
          <Modal overlay={true} width='1416px' height='888px'>
            <div>
                {
                    step === 1 ? typesForm() : null
                }
                {
                    step === 2 ? contentForm() : null
                }
            </div>
          </Modal>
        </section>
      </Background>
    </div>
  </div>
  )
}

export default Share