import React from 'react';
import { useParams } from 'react-router';
import { useState , useEffect} from 'react';
const HotelMap = () => {
    const {id} = useParams()
    const [hotel , setHotel] = useState(null)
    
    

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
            .then(response => response.json())
            .then(data => setHotel(data))
            
    }, [])


   if (!hotel) {
        return (
            <p>Loading Data , please wait </p>
        )
   }
   console.log(hotel.result);
    return (
        <div>
             <div>
                <h1>{hotel.result.name}</h1>
            </div>
            <div>
            {hotel.result.commodities.map(description => <p>[icone] {description}</p>)}
            </div>
            <div>
                <p>Stars : {hotel.result.stars}</p>
            </div>
            <div>
                <p>prix : {hotel.result.price}</p>
            </div>
        </div>
    );
};

export default HotelMap;