import React from 'react';
import Carousel from '../components/Carousel';
import styled from 'styled-components'
import Nav from '../components/Nav';
import HotelInfo from '../components/HotelInfo';
import HotelMap from '../components/HotelMap';

const CarouselSize = styled.div`
    width: 50vh ; 
    height: 100px;   
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
            <HotelInfo/>
        </div>
    );
};

export default HotelPage;
