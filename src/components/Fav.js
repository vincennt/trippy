import React from 'react'
import { useEffect,useState } from 'react'



export default function Fav() {

// localStorage container
const [favorites, setFavorites] = useState([])

//api container
const [hotel , setHotel] = useState(null)
console.log(favorites , typeof favorites , "favorites");
console.log(hotel , typeof hotel, "hotel");
   
  useEffect(() => { 
    const favorites = localStorage.getItem("ID")
    let array = JSON.parse(favorites)
    setFavorites(array)
    if (array === null) {
      return []
    }
    return array
    }, [])

    //  useEffect(() =>{
    //   favorites.forEach(hotelId => {
    //   getHotel(hotelId)       
    //  })})


    const getHotel=(hotelId)=>{
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${hotelId}`)
            .then(response => response.json())
            .then(data => setHotel([...hotel , data]))
    }

const handleClick =()=>{
    console.log(favorites);
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
            fav page
            {/* {favorites.map(fav =>(
                <Link key={hotel._id} to={`/hotels/${city}/${hotel._id}`}>
                        <Hotel key={hotel.name}>
                            <Image
                            src={src} 
                            alt={hotel.name} />
                            <p>{hotel.name}</p>
                            <p>{hotel.price}€</p>
                            <p>{hotel.stars} Stars</p>
                        </Hotel>
                        </Link>
            ))} */}
        </div>
    )

}
