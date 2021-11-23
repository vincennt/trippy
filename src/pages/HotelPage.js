import React from 'react';
import { useParams } from 'react-router-dom';

// const pathname = window.location.pathname
// console.log(pathname);

const HotelPage = (props) => {

  const { city } = useParams();
    console.log(city);
    console.log(props);

    return (
        <div>
            <h1>Hotel Page Page</h1>
        </div>
    );
};

export default HotelPage;
