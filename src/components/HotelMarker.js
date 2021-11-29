import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';


const Box = styled.div`
    position: relative;
`

const BoxPrice = styled.div`
    height: 40px;
    width:  50px;
    position: relative;
    border: solid green;
    border-radius: 7px;
    background-color: ${props => (props.color ? "green" : "white")};
`

const Text = styled.p`
    color: ${props => (props.color ? "white" : "black")};
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
`

const HotelMarker = props => {
    const ref = useRef()
 
    return (
        <Box>
            <BoxPrice ref={ref} color={props.hotel._id === props.selectHotel._id}
                onMouseEnter={() => {
                    props.setSelectHotel(props.hotel)
                }}
                onMouseLeave={() => {
                    props.setSelectHotel({})
                }}
                lat={props.lat}
                lng={props.lng}
            >
            <Text color={props.hotel._id === props.selectHotel._id} >{props.hotel.price}€</Text>
            </BoxPrice>
        </Box>

    );
};

export default HotelMarker;