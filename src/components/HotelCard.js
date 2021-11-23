import React from 'react';
import { useEffect, useState } from "react";
import styled from 'styled-components'


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
const HotelCard = () => {

    const [paris, setParis] = useState([])

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/paris?page=1`)
            .then((res) => res.json())
            .then((res) => setParis(res.results));
    }, []);

    return (
        <HotelContainer>
            {paris.map(hotel => {
                return <Hotel>
                    <img src={"https://trippy-konexio.herokuapp.com/img/hotels/197200_29.jpg"} alt={hotel.name}/>
                    <p>{hotel.name}</p>
                    <p>{hotel.price} Euro</p>
                    <p>{hotel.stars} Stars</p>
                </Hotel>
            })}

        </HotelContainer>
    );
};

export default HotelCard;

