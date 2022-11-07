import React, { ChangeEvent, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaDownload } from 'react-icons/fa';
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
    const [comboboxValue, setComboboxValue] = useState('Select a theme...');
    const [comboboxOpened, setComboboxOpen] = useState(false);
    const [canShare, setCanShare] = useState(false);
    const [position, setPosition] = useState<{lat: number, lng: number}>()

    navigator.geolocation.getCurrentPosition((pos)=>{
        setPosition({lat: pos.coords.latitude, lng: pos.coords.longitude});
    });
 
    const getThemes = () => {

        let themes = ['Select a theme...', 'Climate', 'Friendships', 'School-life', 'Hunger', 'Money'];

        return (
            <div className='form-combobox-list'>
                {
                    themes.map((theme, index) => {
                        return(
                            <p key={index} className='form-combobox-option' onClick={() => setComboboxValue(theme)}>{theme}</p>
                        )
                    })
                }
            </div>
        )
    }

    const verify = (event: ChangeEvent) => {

        console.log((event.target as HTMLTextAreaElement).value);
        if((event.target as HTMLTextAreaElement).value !== '') {
            setCanShare(true);
        } else {
            setCanShare(false);
        }
    }

    const shareNewPost = async () => {
        const textarea = document.getElementById('form-textarea') as HTMLTextAreaElement;
        let newPost = {
            // a changer
            location: position,
            etiquettes: comboboxValue !== 'Select a theme...' ? comboboxValue : '',
            text: textarea.value
        }
        console.log(newPost)
        navigate('/', {replace: true})
    }

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
                    <button className='types-button' onClick={()=> setStep(2)}>Select this option</button>
                </div>
                <p className='versus'>VS</p>
                <div className='types-issue'>
                    <p className='types-title'>Idea</p>
                    <p className='types-description'>Share a current idea you have to start a discussion.</p>
                    <img src={issue} alt=''/>
                    <button className='types-button' onClick={()=> setStep(3)}>Select this option</button>
                </div>
              </div>
            </div>
        )
    }

    const contentForm = () => {

        return (
            <div className='content-form'>
                <button className='content-form-back-button' onClick={()=> setStep(1)}> <FaArrowLeft size={40}/> Previous </button>
                <button className='content-form-share-button' disabled={!canShare} onClick={async ()=> shareNewPost()}> Share</button>
                <img className='content-form-image' src={step === 2 ? challenge : step === 3 ? issue : ''} alt='' />
                <h1>
                    {
                        step === 2 ? 'What is your challenge ?' : null
                    }
                    {
                        step === 3 ? 'What is your idea ?': null
                    }
                </h1>
                <div className='form-container'>
                    <p className='form-label'>Select a theme :</p>
                    <div className='form-combobox' onClick={() => setComboboxOpen(!comboboxOpened)}>
                        <div className='form-combobox-header'>
                            <p>{comboboxValue}</p>
                            <i><FaChevronDown /></i>
                        </div>
                        {
                            comboboxOpened ? 
                            <div className='form-combobox-popup'>
                                {
                                    getThemes()
                                }
                            </div>
                            : null
                        }
                    </div>

                    <p className='form-label'>Describe your challenge :</p>
                    <textarea id='form-textarea' className='form-textarea' onChange={(event) => verify(event)} placeholder='Type your message in this box.'  maxLength={512}/>
                </div>
            </div>
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
                            step === 2 || step === 3 ? contentForm() : null
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