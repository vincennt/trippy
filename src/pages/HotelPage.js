import React from 'react';
import Nav from '../components/Nav';

const pathname = window.location.pathname
console.log(pathname);

const HotelPage = () => {
    return (
        <div>
            <Nav />
            <h1>Hotel Page Page</h1>
        </div>
    );
};

export default HotelPage;
