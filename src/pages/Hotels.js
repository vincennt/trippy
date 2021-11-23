import React from 'react';
import Nav from '../components/Nav';
import { useEffect, useState } from "react";

import HotelCard from '../components/HotelCard';

const Hotels = () => {
    const [paris, setParis] = useState([])

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/paris?page=2`)
            .then((res) => res.json())
            .then((res) => setParis(res.results));
    }, []);
    console.log(paris)
    return (
        <>
            <Nav />
            <h1>Hotels Page</h1>
          
            {paris.map(hotel =>{
                return <HotelCard
                img={hotel.pictures}
                name={hotel.name}
                price={hotel.price}
                stars={hotel.stars}
                />
            })
            }
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </>
    );
};

export default Hotels;


