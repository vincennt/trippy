import React from 'react';
import Nav from '../components/Nav';
import HotelMap from '../components/HotelMap';

// import CityCard from '../components/CityCard';

const Home = () => {
    return (
        <div>
            <Nav />
            <HotelMap />
            <h1>Home</h1>
            <CityCard />
        </div>
    );
};

export default Home;