import React from 'react';

import { useEffect , useState } from 'react';
import styled from 'styled-components'


const HotelContainer = styled.div`
    display : flex ;
    width: 200px ;
    height: 200px
`

const CityCard = () => {

    

    const [hotels , setHotels] = useState(null)

    //appel API des infos de la home page
      useEffect(() => { 
    fetch(`https://trippy-konexio.herokuapp.com/api/home`)
      .then(response => response.json())
      .then(data => setHotels(data))
  }, [])

console.log(hotels);

  if(!hotels ){
        return (
        <p>Loading Data , please wait </p>
        )
  }
    return (
        <div>
            {hotels.cities.map(hotel=> 
            <HotelContainer key={hotel.name}>
                <img src={`https://trippy-konexio.herokuapp.com/${hotel.source}`}/>                
                <p>{hotel.name}</p>
            </HotelContainer>
            )}
        </div>
    );
};

export default CityCard;
