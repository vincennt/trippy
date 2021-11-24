import { React, useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import HotelMap from '../components/HotelMap';



const Map = styled.div`
display : flex ;
    flex-direction: row ;
`

const Hotel = styled.div`
    display : flex ;
    flex-direction: column ;
    width: 600px ;
    border : solid LightGray ;
    border-radius:  5px ;
    align-items: center;
    margin: 0 100px;
`
const HotelContainer = styled.div`
    display : flex ;
    flex-direction: column ;
    align-items: center;
    gap: 20px ;

`

const HotelCard = props => {

   
    const [hotels, setHotels] = useState(null);
    const { city } = useParams();
    
    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
        .then(response => response.json())
        .then(data => setHotels(data))
    }, [])

   
    if (!hotels) {
        return (
            <p>Loading Data , please wait </p>
        )
    }
    
    return (

        <Map>
            <HotelContainer>
                {hotels.results.map(hotel => {
                    return (
                        <Hotel>
                            <img src={"https://trippy-konexio.herokuapp.com/img/hotels/197200_29.jpg"} alt={hotel.name} />
                            <p>{hotel.name}</p>
                            <p>{hotel.price}€</p>
                            <p>{hotel.stars} Stars</p>
                        </Hotel>)
                })}
            </HotelContainer>
            <HotelMap hotels={hotels}/>
        </Map>
    );
};

export default HotelCard;

