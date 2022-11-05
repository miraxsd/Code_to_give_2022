import React, { useEffect, useState } from 'react'
import '../MapOptions/SearchBox.scss'
import { FaSearch } from 'react-icons/fa'
import Theme from '../Tags/Theme';
import { BsBook } from 'react-icons/bs';

const SearchBox = () => {
    
    const [value, setState] = useState('');
    const [popularThemes, setThemes] = useState([
        {
            name: 'School-life',
            icon: 'BsBook'
        },
        {
            name: 'Friendships',
            icon: 'BsBook'
        },
        {
            name: 'Climate',
            icon: 'BsBook'
        }
    ])

    const search = (char: string) => {
        console.log(`Typed: ${char}searching`);
    }

    const getPopularThemes = () => {
        //Insérer une requête au serveur pour aller trouver les themes les plus populaires dans une zone
       setThemes([{
        name: 'School-life',
        icon: 'BsBook'
        }]);
    }

    useEffect(()=>{
        if(value) {
         search(value);
        }
    },[value]);

  return (
    <div className='search-box'>
        <div className='search-input-section'>
            <input className='search-input' onChange={e => setState(e.target.value)} value={value} placeholder='Search by city, country or theme' maxLength={30}></input>
            <i><FaSearch size={25} color={'#CCCCCC'}/></i>
        </div>
        <div className='search-themes-section'>
            <p>Popular themes :</p>
            <div className='popular-themes'>
                {popularThemes.map((theme, index) => {
                    return(
                        <Theme key={index} name={theme.name} icon={<theme.icon />} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SearchBox