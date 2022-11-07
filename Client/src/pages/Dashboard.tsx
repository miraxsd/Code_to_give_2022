import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '../components/Background/Background'
import DashboardModal from '../components/Dashboard/DashboardModal'
import NavBar from '../components/NavBar/NavBar'
import '../pages/Dashboard.scss'
import '../App.scss'
import Modal from '../components/Modal/Modal'
import SearchBox from '../components/MapOptions/SearchBox'
import { getPackedSettings } from 'http2'

let map = require('../assets/map-background.jpg');
let tag1 = require('../assets/sdg1.png')
let tag2 = require('../assets/sdg2.png')
let tag3 = require('../assets/sdg3.png')
let tag4 = require('../assets/sdg4.png')
let tag5 = require('../assets/sdg5.png')
let tag6 = require('../assets/sdg6.png')
let tag7 = require('../assets/sdg7.png')
let tag8 = require('../assets/sdg8.png')
let tag9 = require('../assets/sdg9.png')
let tag10 = require('../assets/sdg10.png')
let tag11 = require('../assets/sdg11.png')
let tag12 = require('../assets/sdg12.png')
let tag13 = require('../assets/sdg13.png')
let tag14 = require('../assets/sdg14.png')
let tag15 = require('../assets/sdg15.png')
let tag16 = require('../assets/sdg16.png')
let tag17 = require('../assets/sdg17.png')

const Dashboard = () => {

  let navigate = useNavigate();

  const [selectedTags, setTags] = useState<string[]>(['']);

  const handleSelection = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    setTags(current => [...current!, (event.target as HTMLDivElement).id]);
  }

  const getTags = () => {

      return (
        <section>
          <div id='tag1' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag1} alt=''/>
          </div>
          <div id='tag2' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag2} alt=''/>
          </div>
          <div id='tag3' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag3} alt=''/>
          </div>
          <div id='tag4' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag4} alt=''/>
          </div>
          <div id='tag5' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag5} alt=''/>
          </div>
          <div id='tag6' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag6} alt=''/>
          </div>
          <div id='tag7' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag7} alt=''/>
          </div>
          <div id='tag8' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag8} alt=''/>
          </div>
          <div id='tag9' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag9} alt=''/>
          </div>
          <div id='tag10' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag10} alt=''/>
          </div>
          <div id='tag11' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag11} alt=''/>
          </div>
          <div id='tag12' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag12} alt=''/>
          </div>
          <div id='tag13' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag13} alt=''/>
          </div>
          <div id='tag14' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag14} alt=''/>
          </div>
          <div id='tag15' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag15} alt=''/>
          </div>
          <div id='tag16' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag16} alt=''/>
          </div>
          <div id='tag17' className='onu-tag' onClick={(event) => handleSelection(event)}>
            <img src={tag17} alt=''/>
          </div>
        </section>
      )
  }
  
  return (
    <div className='App dashboard-page'>
      <header className="App-header">
        <NavBar />
      </header>
      <div className='app-body'>
        <Background >
          <section>
            <div className='map-background'>
              <img className='map-img' src={map} alt='' />
            </div>
            <Modal overlay={false} width='80vw' height='80vh'>
              <div className='dashboard-modal'>
                <div className='modal-header'>
                  <h1>Search a post</h1>
                </div>
                <div className='dashboard-modal-content'>
                  <div className='search-area'>
                    <SearchBox />
                    <div className='post-list'>

                    </div>
                  </div>
                  <div className='tag-selection-area'>
                      {
                        getTags()
                      }
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

export default Dashboard