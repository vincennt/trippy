import React from 'react'
import { useEffect,useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Hotel = styled.div`
width : 500px;
height 500px;
`

const Image = styled.img`co
    background-image: url("src");
    width: 300px ;
    height : 250px;
    border-radius:  10px 10px 0 0;
`


export default function Fav() {

// localStorage container
const [favorites, setFavorites] = useState(localStorage.getItem("ID"))

//api container
const [hotel , setHotel] = useState(null)
// console.log(favorites , typeof favorites , "favorites");
// console.log(hotel , typeof hotel, "hotel");
   



  

    //   useEffect(() => {
    //       if(favorites.lenght>0){
    //     hotel.forEach(ide => {
    //         getHotel(ide)
    //     }) }
    // }, [])

    

      useEffect(() =>{
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/`)
        .then(res => res.json())
        .then(data => setHotel([data]))
    },[])

  

    //  useEffect(() =>{
    //   favorites.forEach(hotelId => {
    //   getHotel(hotelId)       
    //  })})

    //  useEffect( () => {

    //      favorites.forEach( e => {
    //      getHotel(e)
    //      }) 
    //  },[])

    

const handleClick =()=>{
    console.log('hotel : ',hotel);
    console.log("fav :",favorites);
    // console.log('id : ',id);
}

if(!hotel){
    return (<>
    <p>loading your favorite</p>
        <button onClick={()=>handleClick()}>log </button>
        </>)
}

    return (
        <div>
            <button onClick={()=>handleClick()}>log </button>
            
            {hotel.map(fav =>(
                <Link key={fav._id} to={`/hotels/${hotel._id}`}>
                        <Hotel key={fav.name}>
                            <Image
                            src="https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE="
                            alt={fav.name} />
                            <p>{fav.name}</p>
                            <p>{fav.price}€</p>
                            <p>{fav.stars} Stars</p>
                        </Hotel>
                        </Link>
            ))}
        </div>
    )

}
