import React from 'react';

import { useEffect , useState } from 'react';
import styled from 'styled-components'
import { Link} from 'react-router-dom';




const P = styled.p`
font-size : 24px ; 
font-weight : 700 ; 
margin: 0;
`

const City = styled.div`
    display : flex ;
    flex-direction: column ;
    width: 320px ;
    margin-bottom : 40px; 
`

const Image = styled.img`
    background-image: url("src");
    height : 250px;
    border-radius:  5px 5px ;   
`

const CityContainer = styled.div`
    display : grid;
    grid-template-columns: 150px 150px;
    gap: 120px 540px;
    justify-content: center;
`


const CityCard = () => {
    // const { city } = useParams()
    // console.log(`from city cards ${city}`);

    const [citys , setCitys] = useState(null)

    //appel API des infos de la home page

    useEffect(() => {
        getApi()
        
    }, [])

    const getApi= () => {
        fetch(`https://trippy-konexio.herokuapp.com/api/home`)
            .then(response => response.json())
            .then(data => setCitys(data))
  }

// console.log(hotels);



  if(!citys ){
        return (
        <p>Loading Data , please wait </p>
        )
  }
    return (
        <CityContainer>
            {citys.cities.map((city,i) => 
            <City>
                <Link key={city.name} to={`/hotels/${city.slug}`}>
                <Image src={`https://trippy-konexio.herokuapp.com/${city.source}`} alt={city.slug}/>   
                </Link>             
                <P>{city.name}</P>
            </City>            
            )}
        </CityContainer>
    );
};

export default CityCard;
