import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: relative;
`

const BoxPrice = styled.div`
    height: 100px;
    width: 200px;
    position: relative;
    border: solid green;
    background-color: white;
`

const H1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    font-family: 'PT Sans', sans-serif; 
    font-size: 15px;
    text-align: center;
    margin: 0;
    padding: 0;
`
const Text = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    font-family: 'PT Sans', sans-serif; 
    font-size: 14px;
    margin-left: 5px;
`

const HotelMark = props => {
    return (
        <Box>
            <BoxPrice
                lat={props.lat}
                lng={props.lng}
            >
                <H1>{props.hotel.name} </H1>
                <Text>{props.hotel.address}</Text>
            </BoxPrice>
        </Box>

    );
};

export default HotelMark;