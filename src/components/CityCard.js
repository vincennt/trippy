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
    width: 320px;
    margin-bottom : 40px;
    margin: 10px;
`

const Image = styled.img`
    background-image: url("src");
    width: 100%;
    height : 250px;
    border-radius:  5px 5px ;
`

const CityContainer = styled.div`
    display : flex ;
    flex-direction: column ;
    align-items: center;
    gap: 10px ;
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
            {citys.cities.map((city, i) =>
                <City >
                    <Link key={city.name} to={`/hotels/${city.slug}`} >
                        <Image src={`https://trippy-konexio.herokuapp.com/${city.source}`} alt={city.slug} />
                    </Link>
                    <P>{city.name}</P>
                </City>
            )}
        </CityContainer>
    );
};

export default CityCard;
