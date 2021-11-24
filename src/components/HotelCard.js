import {React , useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';



const Hotel = styled.div`
    display : flex ;
    flex-direction: column ;
    width: 320px ;
    border : solid LightGray ;
    border-radius:  5px ;
    align-items: center;
   
`
const HotelContainer = styled.div`
    display : flex ;
    flex-direction: column ;
    align-items: center;
     gap: 20px ;

` 

const HotelCard = props => {

      const [hotels , setHotels] = useState(null)
      const { city, page } = useParams()
      
       
    // console.log(`form hotelcards : ${city}`);


    
   useEffect(() => { 
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}?page=${page}`)
      .then(response => response.json())
      .then(data => setHotels(data))
  }, [])

    if(!hotels){
        return (
        <p>Loading Data , please wait </p>
        )
   }
    return (
        <HotelContainer>
            {hotels.results.map(hotel => {return(
                        <Hotel key={hotel.name}>
                            <img src={"https://trippy-konexio.herokuapp.com/img/hotels/197200_29.jpg"} alt={hotel.name}/>
                            <p>{hotel.name}</p>
                            <p>{hotel.price} Euro</p>
                            <p>{hotel.stars} Stars</p>
                        </Hotel>)
            })}

        </HotelContainer>
    );
};

export default HotelCard;

