import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { prototype } from 'google-map-react';
import Icons from './Icons';



const HotelInfo = props => {
    const { id } = useParams()
    const [hotel, setHotel] = useState(null)

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
    console.log('props', props);
    console.log('commodities : ', hotel.result.commodities);
    console.log('commidities types :', typeof hotel.result.commodities);
    return (
        <div>
            <div>
                <h1>{hotel.result.name}</h1>
            </div>

            <div key={hotel.result.commodities}>
                {hotel.result.commodities.map(commodity => (

                    <Icons commodity={commodity}>
                        <>
                        <commodity>
                            </>
                    </Icons>
                ))}
                </div>
                <div>
                    <p>Stars : {hotel.result.stars}</p>
                </div>
                <div>
                    <p>prix : {hotel.result.price}</p>
                </div>
         </div>
         )
};
           
           
           
export default HotelInfo;