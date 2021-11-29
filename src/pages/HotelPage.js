import React from 'react';

import Nav from '../components/Nav';
import HotelInfo from '../components/HotelInfo';

// const pathname = window.location.pathname
// console.log(pathname);

const HotelPage = (props) => {

//   const { city } = useParams();
    // console.log(city);
    // console.log(props);

    return (
        <div>
            <Nav />
            <HotelInfo/>
        </div>
    );
};

export default HotelPage;
