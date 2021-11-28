import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import HotelMap from './HotelMap';


import { FaWifi, FaGlassMartiniAlt, FaSmokingBan, FaConciergeBell, FaLanguage, FaGlassCheers, FaSuitcaseRolling, FaHotTub } from 'react-icons/fa';
import { MdRestaurantMenu, MdPets, MdOutlineAccessible, MdDryCleaning, MdFreeBreakfast, MdMeetingRoom, MdOutlineAir, MdPool, MdFamilyRestroom } from 'react-icons/md';
import { GiGymBag } from 'react-icons/gi';


const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 12px;
    text-align: center;
    font-size: 16px;
    border-radius: 15px;
    margin: 8px;
    cursor: pointer;
`
const H1 = styled.h1`  
    margin: 6px;
`
const P = styled.p`  
    margin: 6px;
    padding: 3px;
    
`

const HotelInfo = () => {
    const { id } = useParams()
    const [hotel, setHotel] = useState(null)
    const [button, setButton] = useState(false)

    const array = [
        {
            icon: <FaWifi />,
            commodity: "wifi"
        },
        {
            icon: <MdPets />,
            commodity: "animals"
        },
        {
            icon: <FaSuitcaseRolling />,
            commodity: "conciergerie"
        },
        {
            icon: < FaSmokingBan />,
            commodity: "non smoking"
        },
        {
            icon: < MdDryCleaning />,
            commodity: "dry cleaning"
        },
        {
            icon: <FaLanguage />,
            commodity: "multilingual staff"
        },
        {
            icon: <MdFreeBreakfast />,
            commodity: "breakfast included"
        },
        {
            icon: <MdOutlineAir />,
            commodity: "air conditioning"
        },
        {
            icon: <FaGlassCheers />,
            commodity: "minibar"
        },
        {
            icon: <MdFamilyRestroom />,
            commodity: "family"
        },
        {
            icon: <MdRestaurantMenu />,
            commodity: "restaurant"
        },
        {
            icon: <MdOutlineAccessible />,
            commodity: "disabled access"
        },
        {
            icon: <FaConciergeBell />,
            commodity: "room service"
        },
        {
            icon: <FaGlassMartiniAlt />,
            commodity: "bar"
        },
        {
            icon: <GiGymBag />,
            commodity: "gym"
        },
        {
            icon: <MdPool />,
            commodity: "swimming pool"
        },
        {
            icon: <FaHotTub />,
            commodity: "spa"
        },
        {
            icon: <MdMeetingRoom />,
            commodity: "meeting rooms"
        },
        {
            icon: <FaParking />,
            commodity: "parking"
        }
    ]


    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
            .then(response => response.json())
            .then(data => setHotel(data.result))

    }, [])


    if (!hotel) {
        return (
            <p>Loading Data , please wait </p>
        )
    }

    const handleButton = () => {
        if (!button) {
            setButton(true)
        } else {
            setButton(false)
        }
    }


    
    return (
        <div>
            <div>
                <H1>{hotel.name}</H1>
            </div>
            <Button onClick={handleButton}>Options</Button>
            {button ?
                <>
                    <div>{hotel.commodities.filter(function (ele, pos) {
                        return hotel.commodities.indexOf(ele) == pos;
                    })
                        .map(element => {
                            let commodity = array.find(e => e.commodity === element)

                            if (commodity === undefined) {
                                return <p>{element}</p>
                            } else {
                                return (
                                    <>
                                        <P>{commodity.icon} {element}</P>

                                    </>)
                            }
                        })}
                    </div>
                    <div>
                        <P>Stars : {hotel.stars}</P>
                    </div>
                    <div>
                        <P>prix : {hotel.price}</P>
                    </div>
                </> :
                <>
                    <div>
                        <P>Stars : {hotel.stars}</P>
                    </div>
                    <div>
                        <P>prix : {hotel.price}</P>
                    </div>
                </>}
            <HotelMap hotels={[hotel]} center={hotel.location} />
        </div>
    );
};

export default HotelInfo;