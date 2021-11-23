import React from 'react';
import Nav from '../components/Nav';
import {useEffect, useState} from "react";

const Hotels = () => {
    const [paris, setParis] = useState([])

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/paris?page=1`)
          .then((res) => res.json())
            .then((res) => setParis(res.results));
        }, []);
        console.log(paris)
    return (
        <>
        <Nav />
        <h1>Hotels Page</h1>
        {paris.map(hotel =>
        <div key={hotel.name}>
            <img src="https://trippy-konexio.herokuapp.com/img/hotels/229619_1.jpg" />
            <p>{hotel.name}</p>
            <p>{hotel.price} Euro</p>
            <p>{hotel.stars} Stars</p>
        </div>
            )}
        </>
    );
};

export default Hotels;