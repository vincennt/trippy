import { React, useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams,Link  } from 'react-router-dom';
import HotelMap from '../components/HotelMap';
import arrayImage from './Img';


const P = styled.p`
font-size : 18px;
margin-left:2px,
`
const Dive = styled.div 
`margin-left : 2px`

const Image = styled.img`co
    background-image: url("src");
    width: 300px ;
    height : 250px;
    border-radius:  10px 10px 0 0;
`

const Map = styled.div`
`

const Hotel = styled.div`
display :flex;
flex-direction : column;
justify-content : center;
    width: 300px ;
    background-image: url("src");
    // background: linear-gradient(to bottom, #fff 50%, #e0e0e0 100%);
    border-radius: 10px;
    font-weight: bold;
    margin: 0 1em;
    background-color: #dbdbdb ;
    padding: 0 0 10px  0;
    margin: 20px;
    height: 400px;
`
const HotelContainer = styled.div`

display:flex ; 
flex-direction: column;
align-items : center;
justify-content : center ; 

@media (min-width : 725px){
display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 15px;
    flex-direction: column ;
    align-items: center;
    gap: 20px ;
}
`
const Button = styled.button`
box-shadow: 0px 1px 0px 0px #fff6af;
	background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
	background-color:#ffec64;
	border-radius:6px;
	border:1px solid #ffaa22;
	display:inline-block;
	cursor:pointer;
	color:#333333;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffee66;
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
                <HotelMap hotels={hotels.results} center={hotels.center}/>
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
                            </Link>
                            <Dive>
                                <P>{hotel.name}</P>
                                <P>{hotel.price}€</P>
                                <P>{hotel.stars} Stars</P>
                            </Dive>                            
                        <Button onClick={()=>handleAddStorage(hotel._id)}>Add Fav</Button>
                        </Hotel>)
                })}
            </HotelContainer>        
        </Map>
    );
};

export default HotelCard;

