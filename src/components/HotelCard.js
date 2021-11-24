import { React, useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';



const Hotel = styled.div`
    width: 320px ;

    background: linear-gradient(to bottom, #fff 50%, #e0e0e0 100%);
    border-radius: 10px;
    border: 2px solid;
    font-weight: bold;
    margin: 0 1em;
    padding: 20px 20px;
   
`
const HotelContainer = styled.div`
    display : flex ;
    flex-direction: column ;
    align-items: center;
     gap: 20px ;

`

const HotelCard = props => {

    const [hotels, setHotels] = useState(null)
    const { city } = useParams()


    // console.log(`form hotelcards : ${city}`);



    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}?page=${props.pageNumber}`)
            .then(response => response.json())
            .then(data => setHotels(data))
    }, [props, city])

    if (!hotels) {
        return (
            <p>Loading Data , please wait </p>
        )
    }
    console.log(props.pageNumber)
    return (
        <HotelContainer>
            {hotels.results.map(hotel => {
                return (
                    <Hotel key={hotel.name}>
                        <img src={"https://trippy-konexio.herokuapp.com/img/hotels/197200_29.jpg"} alt={hotel.name} />
                        <div>
                            <p>{hotel.name}</p>
                            <p>{hotel.price} Euro</p>
                            <p>{hotel.stars} Stars</p>
                        </div>
                    </Hotel>)
            })}

        </HotelContainer>
    );
};

export default HotelCard;

