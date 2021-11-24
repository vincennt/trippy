import React from 'react';

import { useEffect , useState } from 'react';
import styled from 'styled-components'
import { Link} from 'react-router-dom';




const Hotel = styled.div`
    display : flex ;
    flex-direction: column ;
    width: 320px ;
    border : solid red ;
    border-radius:  5px ;
    text-decoration : none
    
    
    
`
const HotelContainer = styled.div`
    display : flex ;
    flex-direction: column ;
    align-items: center;
     gap: 20px ;

`


const CityCard = () => {
    // const { city } = useParams()
    // console.log(`from city cards ${city}`);

    const [hotels , setHotels] = useState(null)

    //appel API des infos de la home page

    useEffect(() => {
        getApi()
        
    }, [])

    const getApi= () => {
        fetch(`https://trippy-konexio.herokuapp.com/api/home`)
            .then(response => response.json())
            .then(data => setHotels(data))
  }

// console.log(hotels);



  if(!hotels ){
        return (
        <p>Loading Data , please wait </p>
        )
  }
    return (
        <HotelContainer>
            {hotels.cities.map((hotel,i)=> 
            <Link key={hotel.name} to={`/hotels/${hotel.slug}`} >
            <Hotel >
                <img src={`https://trippy-konexio.herokuapp.com/${hotel.source}`} alt={hotel.slug}/>                
                <p>{hotel.name}</p>
            </Hotel>
            </Link>
            )}
        </HotelContainer>
    );
};

export default CityCard;
