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
    );
};

export default Hotels;