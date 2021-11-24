import {React , useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import arrayImage from './Img';


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
      const { city } = useParams()
      console.log(city);
       
    // console.log(`form hotelcards : ${city}`);

   
    
   useEffect(() => { 
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
      .then(response => response.json())
      .then(data => setHotels(data))
  }, [])
   
    if(!hotels){
        return (
        <p>Loading Data , please wait </p>
        )
        
   }
   console.log(hotels.results);
    return (
        <HotelContainer>
            {hotels.results.map(hotel => {
                var src = hotel.pictures.find(picture => arrayImage.includes(picture)) 
                if(src){
                    src = 'https://trippy-konexio.herokuapp.com'+src
                }
                else{src = 'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=' }
                
                console.log(src);
                return(
                        <Hotel key={hotel.name}>
                            <img src={src}
     
                         alt={hotel.name}/>

                            <p>{hotel.name}</p>
                            <p>{hotel.price} Euro</p>
                            <p>{hotel.stars} Stars</p>
                        </Hotel>)
            })}

        </HotelContainer>
    );
};

export default HotelCard;

