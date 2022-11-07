import React, { useEffect, useState } from 'react'
import '../MapOptions/SearchBox.scss'
import { FaSearch } from 'react-icons/fa'
import Theme from '../Tags/Theme';
import { BsBook } from 'react-icons/bs';
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import "@reach/combobox/styles.css"
import evenBus from '../../eventBus'
import eventBus from '../../eventBus';

interface SearchBoxProps {
    panningFunction?: ({lat, lng}: any) => void
}

const SearchBox = ({panningFunction}: SearchBoxProps) => {
    
    const [popularThemes, setThemes] = useState([
        {
            name: 'School-life',
            icon: BsBook
        },
        {
            name: 'Friendships',
            icon: BsBook
        },
        {
            name: 'Climate',
            icon: BsBook
        }
    ]);

    const {ready,value, suggestions: {status, data}, setValue, clearSuggestions, } = usePlacesAutocomplete({
        requestOptions: {
            location: { lng: () => -73.567253, lat: () => 45.501690} as google.maps.LatLng,
            radius: 200*1000,
            //types: ['address'],
        },
    });

    function search(char: string) {
       
        console.log(`Typed: ${char}searching`);

        return 
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getPopularThemes = () => {
        //Insérer une requête au serveur pour aller trouver les themes les plus populaires dans une zone
       setThemes([{
        name: 'School-life',
        icon: BsBook
        }]);
    }

    const handleSelect = (location: any) => {
        eventBus.dispatch('newLocation', location);
    }

    useEffect(()=>{
        if(value) {
         search(value);
        }
    },[value]);


  return (
    <div className='search-box'>
        <div className='search-input-section'>
            <Combobox 
                onSelect={async (location) => {
                    setValue(location, false);
                    clearSuggestions();
                    try {
                        const res = await getGeocode({address: location});
                        const {lat, lng} = await getLatLng(res[0]);
                        handleSelect({lat, lng});
                        panningFunction!?.({lat, lng});
                    } catch(error) {
                        console.log('Location input error');
                    }
                }} 
                className='search-input'
            >
                <ComboboxInput className='search-input' value={value} onChange={(event) => {setValue(event.target.value)}} disabled={!ready} placeholder='Search by city, country or theme'/>
                <ComboboxPopover style={{fontSize: 'large'}}>
                    <ComboboxList  style={{width: '100%',display:'flex', flexDirection:'column' ,justifyContent:'space-evenly', backgroundColor: 'rgba(217, 217, 217, 0.4)'}}>
                        {status === 'OK' && data.map(({place_id, description}) => (<ComboboxOption key={place_id} value={description} />))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
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