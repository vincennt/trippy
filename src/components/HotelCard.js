import { React, useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams,Link  } from 'react-router-dom';
import HotelMap from '../components/HotelMap';
import arrayImage from './Img';



const Image = styled.img`
    background-image: url("src");
    width: 320px ;
    height : 300px;
`

const Map = styled.div`
display : grid;
grid-template-columns: 60px 60px;
grid-template-rows: 90px 90px;
flex-direction: row ;
`

const Hotel = styled.div`
    width: 320px ;
    background-image: url("src");
    // background: linear-gradient(to bottom, #fff 50%, #e0e0e0 100%);
    border-radius: 10px;
    border: 2px solid;
    font-weight: bold;
    margin: 0 1em;
    padding: 20px 20px;
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

    const handleAddStorage=(id)=>{
        const favorites = localStorage.getItem("ID")
        if (!favorites){
            localStorage.setItem("ID", JSON.stringify([id]))
        }
        else{
            let array = JSON.parse(favorites)
            array = [...array , id] 
            console.log(array);
            localStorage.setItem("ID", JSON.stringify(array))
            
        }
        
    }

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

                    
                    return (
                         
                        <Hotel key={hotel.name}>
                         <Link key={hotel._id} to={`/hotels/${city}/${hotel._id}`}>                                                        
                            <Image
                            src={src} 
                            alt={hotel.name} />
                            <p>{hotel.name}</p>
                            <p>{hotel.price}€</p>
                            <p>{hotel.stars} Stars</p>
                         </Link>
                        <button onClick={()=>handleAddStorage(hotel._id)}>Add Fav</button>
                        </Hotel>)
                })}
            </HotelContainer>
            <HotelMap hotels={hotels} />
        </Map>
    );
};

export default HotelCard;

