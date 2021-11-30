import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const P = styled.p`
    font-size : 24px ; 
    font-weight : 700 ; 
    margin: 0;
`

const City = styled.div`
    display : flex ;
    flex-direction: column ;
<<<<<<< HEAD
    width: 550px ;
    margin-bottom : 40px; 
    justify-self: center;
    @media(max-width : 1130px){
        width:450px
    }
    @media(max-width : 940px){
        width:350px
    }
=======
    width: 320px;
    margin-bottom : 40px;
    margin: 10px;
>>>>>>> 5cc7601f50d1fbdeec8a7c9c92a5f20db7f3eb50
`

const Image = styled.img`
<<<<<<< HEAD
    width:100%;
    height : 350px;
    border-radius:  5px 5px ;   
     @media(max-width : 940px){
        height : 250px;
    }
    @media(max-width : 750px){
        height : 250px;
    }
=======
    background-image: url("src");
    width: 100%;
    height : 250px;
    border-radius:  5px 5px ;
>>>>>>> 5cc7601f50d1fbdeec8a7c9c92a5f20db7f3eb50
`

const CityContainer = styled.div`
<<<<<<< HEAD
    display:flex;
    flex-direction  : column;
    align-items : center;
    margin-top : 60px;
    @media(min-width: 740px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
}

=======
    display : flex ;
    flex-direction: column ;
    align-items: center;
    gap: 10px ;
>>>>>>> 5cc7601f50d1fbdeec8a7c9c92a5f20db7f3eb50
`

const CityCard = () => {
    // const { city } = useParams()
    // console.log(`from city cards ${city}`);

    const [citys, setCitys] = useState(null)

    //appel API des infos de la home page

    useEffect(() => {
        getApi()

    }, [])

    const getApi = () => {
        fetch(`https://trippy-konexio.herokuapp.com/api/home`)
            .then(response => response.json())
            .then(data => setCitys(data))
    }

    // console.log(hotels);

    if (!citys) {
        return (
            <p>Loading Data , please wait </p>
        )
    }
    return (
        <CityContainer>
<<<<<<< HEAD
            {citys.cities.map((city,i) => 
            <City>
                <Link key={city.name} to={`/hotels/${city.slug}`}>
                <Image src={`https://trippy-konexio.herokuapp.com/${city.source}`} alt={city.slug}/>   
                </Link>             
                <P>{city.name}</P>
            </City>            
=======
            {citys.cities.map((city, i) =>
                <City >
                    <Link key={city.name} to={`/hotels/${city.slug}`} >
                        <Image src={`https://trippy-konexio.herokuapp.com/${city.source}`} alt={city.slug} />
                    </Link>
                    <P>{city.name}</P>
                </City>
>>>>>>> 5cc7601f50d1fbdeec8a7c9c92a5f20db7f3eb50
            )}
        </CityContainer>
    );
};

export default CityCard;
