import React from 'react';

import Nav from '../components/Nav';
import HotelMap from '../components/HotelMap';

// const pathname = window.location.pathname
// console.log(pathname);

const HotelPage = (props) => {

//   const { city } = useParams();
    // console.log(city);
    // console.log(props);

    return (
        <div>
            <Nav />
            <HotelMap>
            
            </HotelMap>
        </div>
    );
};

export default HotelPage;
