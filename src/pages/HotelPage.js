import React from 'react';
import Carousel from '../components/Carousel';
import styled from 'styled-components'
import Nav from '../components/Nav';
import HotelMap from '../components/HotelMap';

const CarouselSize = styled.div`
    width: 100vh ; 
    height: 200px;   
`

const HotelPage = (props) => {

    //   const { city } = useParams();
    // console.log(city);
    console.log(props);

    return (
        <div>
            <Nav />
            <h1>Hotel Page Page</h1>
            <CarouselSize>
                <Carousel />
            </CarouselSize>
            <HotelMap>
            
            </HotelMap>
        </div>
    );
};

export default HotelPage;
