import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import HotelsMap from "../components/HotelsMap";
import arrayImage from "./Img";
import Hotel from "./Hotel";

const Map = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1250px) {
    display: flex;
    flex-direction: row;
  }
`;

const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 20px;
  margin-top: 40px;

  @media (min-width: 680px) {
    display: grid;
    gap: 20px;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
    margin: 15px;
  }
`;

const HotelCard = (props) => {
  const [hotels, setHotels] = useState(null);
  const { city } = useParams();
  const [selectHotel, setSelectHotel] = useState({});
  // console.log(`form hotelcards : ${city}`);

  const handleAddStorage = (id) => {
    const favorites = localStorage.getItem("ID");
    if (!favorites) {
      localStorage.setItem("ID", JSON.stringify([id]));
    } else {
      let array = JSON.parse(favorites);
      array = [...array, id];
      console.log(array);
      localStorage.setItem("ID", JSON.stringify(array));
    }
  };

  useEffect(() => {
    fetch(
      `https://trippy-konexio.herokuapp.com/api/hotels/city/${city}?page=${props.pageNumber}`
    )
      .then((response) => response.json())
      .then((data) => setHotels(data));
  }, [city, props.pageNumber]);

  if (!hotels) {
    return <p>Loading Data , please wait </p>;
  }

    if (!hotels) {
        return (
            <p>Loading Data , please wait </p>
        )
    }

    return (
        <Map>
            <HotelContainer>
                {hotels.results.map(hotel => {
                    var src = hotel.pictures.find(picture => arrayImage.includes(picture))
                    if (src) {
                        src = 'https://trippy-konexio.herokuapp.com' + src
                    }
                    else { src = 'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=' }

                    return (
                        <Hotel key={hotel.name} hotel={hotel} selectHotel={selectHotel} setSelectHotel={setSelectHotel} src={src} handleAddStorage={handleAddStorage} />)
                })}
            </HotelContainer>
            <HotelsMap hotels={hotels}  selectHotel={selectHotel} setSelectHotel={setSelectHotel} />
        </Map>
    );

            }

export default HotelCard;
