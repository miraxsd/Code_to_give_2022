import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import FullPost from '../components/Posts/FullPost'
import Background from '../components/Background/Background'
import Modal from '../components/Modal/Modal'
import '../pages/PostPage.scss'
import Theme from '../components/Tags/Theme'
import { AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

let idea = require('../assets/problem.png');
let challenge = require('../assets/goal.png');
let map = require('../assets/map-background.jpg');

const PostPage = () => {

  const [details, setDetails] = useState({
    id: 0,
    user:  "Bobby123",
    location: [17.966958, -66.123551],
    postType: "idea",
    etiquettes: ['Friendship', 'School-life'],
    title: "Hurricane hit my city",
    description :
    "Last month, a hurricane hit my city and destroyed everything. My family was lucky, and our house was not really damaged, but most of my friends’ houses are gone. The power just came back, but we still don’t have clean water and food is hard to find. I don’t know how to help my community.",
    date: "4 days ago",
    liked: false,
    numberOfLikes: 110,
    comments: [{
        user: "juan908",
        location: [17.934013, -76.456299],
        comment:
        "I was in this situation last year, so I know it’s really hard. You can help by sharing some of your clothes and utilities with your friends who lost everything. Even if it’s just a couple of shirts, it will help a lot.",
        liked: false,
        numberOfLikes: 40
    }]
})


  let navigate = useNavigate();


  useEffect(() => {

  }, []);


  return (
    <div className='App post-page'>
      <header className="App-header">
        <NavBar />
      </header>
      <div className='app-body'>
        <Background >
          <section>
            <div className='map-background'>
              <img className='map-img' src={map} alt='' />
            </div>
            <Modal overlay={false} width='1400px' height='1104px'>
              <div className='post-page-modal'>
                <div className='top-section'>
                  <img className='post-page-image' src={details.postType === 'challenge' ? challenge : details.postType === 'idea'? idea : ''} alt='' />
                  <button className='close-button' onClick={() => navigate('/', {replace: true})}> <AiOutlineClose color='#000000' size={50} /> </button>
                  <div className='tags-section'>
                    {
                      details.etiquettes.map((tag, index) => {

                        if(tag === '') return '';

                        return (
                          <Theme name={tag}  />
                        )
                      })
                    }
                  </div>
                </div>
                <FullPost details={details}/>
              </div>
            </Modal>
          </section>
        </Background>
        {/* <div className='post-component-container'>
          <div className='post-container'>
            <h1 className='post-user-header'>Bobby123</h1>
            <img className='big-profile-pic' src={user} alt='profile pic'></img>
            <p className='user-location'>Montréal, Québec</p>
            
            <div className='post-comments'>
            </div>
            <Link to={'/'}><FontAwesomeIcon icon={faHome} className='home-button'/></Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default PostPage