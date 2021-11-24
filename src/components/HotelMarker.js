import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: relative;
`
const BoxPrice = styled.div`
height: 50px;
width: 50px;
position: relative;
border: solid green;
background-color: white;
`

const Text = styled.p`
font-size: 20px;
text-align: center;
`

const HotelMarker = props => {
    return (
        <Box>
            <BoxPrice
                // onMouseEnter={() => {
                //     props.setSelectHotel(props.hotels)
                // }}
                // onMouseLeave={() => {
                //     props.setSelectHotel()
                // }}
                lat={props.lat}
                lng={props.lng}
            >
            <Text>{props.hotel.price}</Text>
            </BoxPrice>
        </Box>

    );
};

export default HotelMarker;