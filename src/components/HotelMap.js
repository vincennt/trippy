import React from 'react';
import { useParams } from 'react-router';
import { useState , useEffect} from 'react';
const HotelMap = () => {
    const {id} = useParams()
    const [hotel , setHotel] = useState(null)
    console.log(id);

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
    return (
        <div>
            {/* {hotel.results.map(description => 
                <p>${description.commodities}</p>
            )} */}
        </div>
    );
};

export default HotelMap;