import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import HotelMap from "./HotelMap";
import Carousel from "../components/Carousel";
import ReactStars from "react-rating-stars-component";
import Room from "../components/Room";

import {
  FaHome,
  FaShuttleVan,
  FaParking,
  FaWifi,
  FaGlassMartiniAlt,
  FaSmokingBan,
  FaConciergeBell,
  FaLanguage,
  FaGlassCheers,
  FaSuitcaseRolling,
  FaHotTub,
} from "react-icons/fa";
import {
  MdRestaurantMenu,
  MdPets,
  MdOutlineAccessible,
  MdDryCleaning,
  MdFreeBreakfast,
  MdMeetingRoom,
  MdOutlineAir,
  MdPool,
  MdFamilyRestroom,
} from "react-icons/md";
import { GiGymBag } from "react-icons/gi";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 10px 200px;
`;

const Contain = styled.div`
  width: 70%;
  height: auto;
  margin: 30px auto;
`;

const Button = styled.button`
  background-color: #69b1ae;
  border: none;
  color: white;
  padding: 10px 12px;
  text-align: center;
  font-size: 16px;
  border-radius: 15px;
  margin-left: 45px;
  cursor: pointer;
`;
const H2 = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");
  font-family: "PT Sans", sans-serif;
  margin-left: 45px;
  font-weight: lighter;
`;
const P = styled.div`
  margin-left: 45px;
  padding: 1px;
  @import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");
  font-family: "PT Sans", sans-serif;
`;

const HotelInfo = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [button, setButton] = useState(false);
  const [room, setRoom] = useState(null);
  const [buttonRoom, setButtonRoom] = useState(false);

  const array = [
    {
      icon: <FaWifi />,
      commodity: "wifi",
    },
    {
      icon: <MdPets />,
      commodity: "animals",
    },
    {
      icon: <FaSuitcaseRolling />,
      commodity: "conciergerie",
    },
    {
      icon: <FaSmokingBan />,
      commodity: "non smoking",
    },
    {
      icon: <MdDryCleaning />,
      commodity: "dry cleaning",
    },
    {
      icon: <FaLanguage />,
      commodity: "multilingual staff",
    },
    {
      icon: <MdFreeBreakfast />,
      commodity: "breakfast included",
    },
    {
      icon: <MdOutlineAir />,
      commodity: "air conditioning",
    },
    {
      icon: <FaGlassCheers />,
      commodity: "minibar",
    },
    {
      icon: <MdFamilyRestroom />,
      commodity: "family",
    },
    {
      icon: <MdRestaurantMenu />,
      commodity: "restaurant",
    },
    {
      icon: <MdOutlineAccessible />,
      commodity: "disabled access",
    },
    {
      icon: <FaConciergeBell />,
      commodity: "room service",
    },
    {
      icon: <FaGlassMartiniAlt />,
      commodity: "bar",
    },
    {
      icon: <GiGymBag />,
      commodity: "gym",
    },
    {
      icon: <MdPool />,
      commodity: "swimming pool",
    },
    {
      icon: <FaHotTub />,
      commodity: "spa",
    },
    {
      icon: <MdMeetingRoom />,
      commodity: "meeting rooms",
    },
    {
      icon: <FaParking />,
      commodity: "parking",
    },
    {
      icon: <FaShuttleVan />,
      commodity: "shuttle",
    },
    {
      icon: <FaHome />,
      commodity: "suites",
    },
  ];

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => setHotel(data.result));
  }, [id]);

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}/rooms`)
      .then((response) => response.json())
      .then((data) => setRoom(data.results));
  }, [id]);

  if (!hotel) {
    return <p>Loading Data , please wait </p>;
  }

  const handleRoom = () => {
    if (!buttonRoom) {
      setButtonRoom(true);
    } else {
      setButtonRoom(false);
    }
  };

  const handleButton = () => {
    if (!button) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

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

      <Button onClick={handleRoom}>Rooms list</Button>
      {buttonRoom ? (
        <>
          <Div>
            {room.map((room, i) => {
              return <Room key={i} room={room} />;
            })}
          </Div>
          <Button onClick={handleButton}>Options</Button>
          {button ? (
            <>
              <div>
                {hotel.commodities
                  .filter(function (ele, pos) {
                    return hotel.commodities.indexOf(ele) === pos;
                  })
                  .map((element, i) => {
                    let commodity = array.find((e) => e.commodity === element);

                    if (commodity === undefined) {
                      return <P key={i}>{element}</P>;
                    } else {
                      return (
                        <>
                          <P key={i}>
                            {commodity.icon} {element}
                          </P>
                        </>
                      );
                    }
                  })}
              </div>
              <div>
                <P>
                  {" "}
                  Stars :{" "}
                  <ReactStars
                    count={5}
                    size={24}
                    value={hotel.stars}
                    edit={true}
                    activeColor="#ffd700"
                  />
                </P>
              </div>
              <div>
                <P>Prix : {hotel.price}€</P>
              </div>
            </>
          ) : (
            <>
              <div>
                <P>
                  {" "}
                  Stars :{" "}
                  <ReactStars
                    count={5}
                    size={24}
                    value={hotel.stars}
                    edit={true}
                    activeColor="#ffd700"
                  />
                </P>
              </div>
              <div>
                <P>Prix : {hotel.price}€</P>
              </div>
            </>
          )}
          <HotelMap hotels={[hotel]} center={hotel.location} />
        </>
      ) : (
        <>
          <Button onClick={handleButton}>Options</Button>
          {button ? (
            <>
              <div>
                {hotel.commodities
                  .filter(function (ele, pos) {
                    return hotel.commodities.indexOf(ele) === pos;
                  })
                  .map((element, i) => {
                    let commodity = array.find((e) => e.commodity === element);

                    if (commodity === undefined) {
                      return <P key={i}>{element}</P>;
                    } else {
                      return (
                        <>
                          <P key={i}>
                            {commodity.icon} {element}
                          </P>
                        </>
                      );
                    }
                  })}
              </div>
              <div>
                <P>
                  Stars :{" "}
                  <ReactStars
                    count={5}
                    size={24}
                    value={hotel.stars}
                    edit={true}
                    activeColor="#ffd700"
                  />
                </P>
              </div>
              <div>
                <P>Prix : {hotel.price}€</P>
              </div>
            </>
          ) : (
            <>
              <div>
                <P>
                  Stars :{" "}
                  <ReactStars
                    count={5}
                    size={24}
                    value={hotel.stars}
                    edit={true}
                    activeColor="#ffd700"
                  />
                </P>
              </div>
              <div>
                <P>Prix : {hotel.price}€</P>
              </div>
            </>
          )}
          <HotelMap hotels={[hotel]} center={hotel.location} />
        </>
      )}
    </div>
  );
};

export default HotelInfo;
