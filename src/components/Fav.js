import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrayImage from "./Img";

const Para = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;
const Dive = styled.div`
  margin-left: 2px;
`;
const Button = styled.button`
  box-shadow: 0px 1px 0px 0px #fff6af;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  border-radius: 6px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
`;

const City = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  margin-bottom: 40px;
  justify-self: center;
  @media (max-width: 1130px) {
    width: 450px;
  }
  @media (max-width: 940px) {
    width: 350px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 5px 5px;
  @media (max-width: 940px) {
    height: 250px;
  }
  @media (max-width: 750px) {
    height: 250px;
  }
`;

const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  @media (min-width: 740px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function Fav() {
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

  //api container
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favoritesIds = JSON.parse(localStorage.getItem("ID"));
    if (favoritesIds !== null) {
      const promiseArray = favoritesIds.map((id) => {
        return fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`);
      });

      Promise.all(promiseArray)
        .then((responses) =>
          Promise.all(responses.map((response) => response.json()))
        )
        .then((response) => {
          const formattedHotels = response.map((r) => r.result);
          setHotel(formattedHotels);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }
  if (hotel.length === 0) {
    return <p>Pas de favoris</p>;
  }
  return (
    <div>
      <CityContainer>
        {hotel.map((hotel) => {
          var src = hotel.pictures.find((picture) =>
            arrayImage.includes(picture)
          );
          if (src) {
            src = "https://trippy-konexio.herokuapp.com" + src;
          } else {
            src =
              "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=";
          }
          return (
            <City key={hotel.name}>
              <Link
                key={hotel._id}
                to={`/hotels/${hotel.country}/${hotel._id}`}
              >
                <Image src={src} alt={hotel.name} />
              </Link>
              <Dive>
                <Para>{hotel.name}</Para>
                <Para>{hotel.price}€</Para>
                <Para>{hotel.stars} Stars</Para>
              </Dive>
              <Button onClick={() => handleAddStorage(hotel._id)}>
                Add Fav
              </Button>
            </City>
          );
        })}
      </CityContainer>
    </div>
  );
}
