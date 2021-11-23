import {React , useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Hotels = (props) => {
    const [hotels , setHotels] = useState(null)
  const { city } = useParams();
    console.log(hotels);
    
      useEffect(() => {
        getApi()
    }, [])

    const getApi= () => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
            .then(response => response.json())
            .then(data => setHotels(data))
  }
   if(!hotels){
        return (
        <p>Loading Data , please wait </p>
        )
   }

    return (
        <div>
           {hotels.results.map(hotel => (<p>{hotel.name}</p>))}
        </div>

// import React from 'react';
// import Nav from '../components/Nav';
// import { useEffect, useState } from "react";

// import HotelCard from '../components/HotelCard';

// const Hotels = () => {
//     const [paris, setParis] = useState([])

//     useEffect(() => {
//         fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/paris?page=2`)
//             .then((res) => res.json())
//             .then((res) => setParis(res.results));
//     }, []);
//     console.log(paris)
//     return (
//         <>
//             <Nav />
//             <h1>Hotels Page</h1>
          
//             {paris.map(hotel =>{
//                 return <HotelCard
//                 img={hotel.pictures}
//                 name={hotel.name}
//                 price={hotel.price}
//                 stars={hotel.stars}
//                 />
//             })
//             }
//             <button>1</button>
//             <button>2</button>
//             <button>3</button>
//         </>
//     );
// };

// export default Hotels;


