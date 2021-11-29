import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import HotelMap from './HotelMap';
import Carousel from '../components/Carousel';
import ReactStars from 'react-rating-stars-component';

import Room from '../components/Room';
import { FaParking, FaWifi, FaGlassMartiniAlt, FaSmokingBan, FaConciergeBell, FaLanguage, FaGlassCheers, FaSuitcaseRolling, FaHotTub } from 'react-icons/fa';
import { MdRestaurantMenu, MdPets, MdOutlineAccessible, MdDryCleaning, MdFreeBreakfast, MdMeetingRoom, MdOutlineAir, MdPool, MdFamilyRestroom } from 'react-icons/md';
import { GiGymBag } from 'react-icons/gi';


const Contain =styled.div`
width : 70%;
height : auto;
margin: 100px auto;
`

const Button = styled.button`
    background-color: #69B1AE;
    border: none;
    color: white;
    padding: 10px 12px;
    text-align: center;
    font-size: 16px;
    border-radius: 15px;
    margin-left: 45px;
    cursor: pointer;
`
const H2 = styled.h3` 
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    font-family: 'PT Sans', sans-serif; 
    margin-left: 45px;
    font-weight:lighter;
    
`
const P = styled.p`  
    margin-left: 45px;
    padding: 1px;
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    font-family: 'PT Sans', sans-serif; 
`

const HotelInfo = () => {
    const { id } = useParams()
    const [hotel, setHotel] = useState(null)
    const [button, setButton] = useState(false)
    const [room, setRoom] = useState(null)
    const [buttonRoom, setButtonRoom] = useState(false)

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

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}/rooms`)
            .then(response => response.json())
            .then(data => setRoom(data.results))

    }, [])


    if (!hotel) {
        return (
            <p>Loading Data , please wait </p>
        )
    }

    const handleRoom = () => {
        if (!buttonRoom) {
            setButtonRoom(true)
        } else {
            setButtonRoom(false)
        }
    }

    const handleButton = () => {
        if (!button) {
            setButton(true)
        } else {
            setButton(false)
        }
    }
    console.log(buttonRoom)
    console.log(room)

    return (
        <div>
            <div>
                <H2>{hotel.name}</H2>
            </div>
            <Contain>
                <Carousel />
            </Contain> 
            {/* <div>
            </div> */}
            
            <Button onClick={handleRoom}>Liste des chambres</Button>
            {buttonRoom ?
                <>
                    {room.map(room => {
                        return (<Room room={room} />)
                    })}
                    <Button onClick={handleButton}>Options</Button>
                    {button ?
                        <>
                            <div>{hotel.commodities.filter(function (ele, pos) {
                                return hotel.commodities.indexOf(ele) == pos;
                            })
                                .map(element => {
                                    let commodity = array.find(e => e.commodity === element)

                                    if (commodity === undefined) {
                                        return <P>{element}</P>
                                    } else {
                                        return (
                                            <>
                                                <P>{commodity.icon} {element}</P>

                                            </>)
                                    }
                                })}
                            </div>
                            <div>
                                <P> Stars : <ReactStars
                                    count={5}
                                    size={24}
                                    value={hotel.stars}
                                    edit={true}
                                    activeColor="#ffd700"
                                /></P>
                            </div>
                            <div>
                                <P>Prix : {hotel.price}</P>
                            </div>
                        </> :
                        <>
                            <div>
                                <P> Stars : <ReactStars
                                    count={5}
                                    size={24}
                                    value={hotel.stars}
                                    edit={true}
                                    activeColor="#ffd700"
                                /></P>
                            </div>
                            <div>
                                <P>Prix : {hotel.price}</P>
                            </div>
                        </>}
                    <HotelMap hotels={[hotel]} center={hotel.location} />
                </> :
                <>
                    <Button onClick={handleButton}>Options</Button>
                    {button ?
                        <>
                            <div>{hotel.commodities.filter(function (ele, pos) {
                                return hotel.commodities.indexOf(ele) == pos;
                            })
                                .map(element => {
                                    let commodity = array.find(e => e.commodity === element)

                                    if (commodity === undefined) {
                                        return <P>{element}</P>
                                    } else {
                                        return (
                                            <>
                                                <P>{commodity.icon} {element}</P>

                                            </>)
                                    }
                                })}
                            </div>
                            <div>
                                <P> Stars : <ReactStars
                                    count={5}
                                    size={24}
                                    value={hotel.stars}
                                    edit={true}
                                    activeColor="#ffd700"
                                /></P>
                            </div>
                            <div>
                                <P>Prix : {hotel.price}</P>
                            </div>
                        </> :
                        <>
                            <div>
                                <P> Stars : <ReactStars
                                    count={5}
                                    size={24}
                                    value={hotel.stars}
                                    edit={true}
                                    activeColor="#ffd700"
                                /></P>
                            </div>
                            <div>
                                <P>Prix : {hotel.price}</P>
                            </div>
                        </>}
                    <HotelMap hotels={[hotel]} center={hotel.location} />
                </>}
        </div>

    );
};

export default HotelInfo;