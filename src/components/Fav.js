import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import arrayImage from './Img'

const P = styled.p`
font-size : 18px;
margin-left:2px,
`
const Dive = styled.div
    `margin-left : 2px`

const Image = styled.img`
    background-image: url("src");
    width: 300px ;
    height : 250px;
    border-radius:  10px 10px 0 0;
`



const Hotel = styled.div`
display :flex;
flex-direction : column;
justify-content : center;
    width: 300px ;
    background-image: url("src");
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

export default function Fav() {


    const handleAddStorage = (id) => {
        const favorites = localStorage.getItem("ID")
        if (!favorites) {
            localStorage.setItem("ID", JSON.stringify([id]))
        }
        else {
            let array = JSON.parse(favorites)
            array = [...array, id]
            console.log(array);
            localStorage.setItem("ID", JSON.stringify(array))

        }

    }


    //api container
    const [hotel, setHotel] = useState([])


    useEffect(() => {
        const favoritesIds = JSON.parse(localStorage.getItem("ID"))
        const promiseArray = favoritesIds.map(id => {
            return fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
        })

        Promise.all(promiseArray)
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(response => {
                const formattedHotels = response.map(r => r.result)
                setHotel(formattedHotels)
            })
    }, [])

    if (hotel.length === 0) {
        return (<p>Loading</p>)
    }
    return (
        <div>
            <HotelContainer>
                {hotel.map(hotel => {
                    var src = hotel.pictures.find(picture => arrayImage.includes(picture))
                    if (src) {
                        src = 'https://trippy-konexio.herokuapp.com' + src
                    }
                    else { src = 'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=' }


                    return (

                        <Hotel key={hotel.name}>
                            <Link key={hotel._id} to={`/hotels/${hotel._id}`}>
                                <Image
                                    src={src}
                                    alt={hotel.name} />
                            </Link>
                            <Dive>
                                <P>{hotel.name}</P>
                                <P>{hotel.price}€</P>
                                <P>{hotel.stars} Stars</P>
                            </Dive>
                            <Button onClick={() => handleAddStorage(hotel._id)}>Add Fav</Button>
                        </Hotel>)
                })}
            </HotelContainer>

        </div>
    )

}
