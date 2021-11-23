import React from 'react';
import Nav from '../components/Nav';

import CityCard from '../components/CityCard';

const Home = () => {
    return (
        <div>
            <Nav />
            <h1>Home</h1>
            <CityCard />
        </div>
    );
};

export default Home;