import { React, useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom';
import HotelMap from '../components/HotelMap';
import arrayImage from './Img';

const Image = styled.img`co
    background-image: url("src");
    width: 300px ;
    height : 250px;
    border-radius:  10px 10px 0 0;
`

const Map = styled.div`
display : grid;
grid-template-columns: 60px 60px;
grid-template-rows: 90px 90px;
flex-direction: row ;
`
const Hotel = styled.div`
    width: 300px ;
    background-image: url("src");
    // background: linear-gradient(to bottom, #fff 50%, #e0e0e0 100%);
    border-radius: 10px;
    font-weight: bold;
    margin: 0 1em;
    background-color: #959CA4;
    padding: 0 0 10px  0;
    margin: 20px;
    height: 400px;
`
const HotelContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 15px;
    flex-direction: column ;
    align-items: center;
    gap: 20px ;
    
`

const HotelCard = props => {

    const [hotels, setHotels] = useState(null)
    const { city } = useParams()
   // console.log(`form hotelcards : ${city}`);

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}?page=${props.pageNumber}`)
            .then(response => response.json())
            .then(data => setHotels(data))
    }, [city, props.pageNumber])


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

                    console.log(src);
           
                    return (
                        <Link key={hotel._id} to={`/hotels/${city}/${hotel._id}`}>
                            <Hotel key={hotel.name} >
                                <Image
                                    src={src}
                                    alt={hotel.name} />
                                <p>{hotel.name}</p>
                                <p>{hotel.price}€</p>
                                <p>{hotel.stars} Stars</p>
                            </Hotel>
                        </Link>)
                })}
            </HotelContainer>
            <HotelMap hotels={hotels.results} center={hotels.center} />
        </Map>
    );
};

export default HotelCard;

