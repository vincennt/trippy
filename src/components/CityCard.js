import React from 'react';

import { useEffect , useState } from 'react';
import styled from 'styled-components'
import { Link} from 'react-router-dom';


const City = styled.div`
    display : flex ;
    flex-direction: column ;
    width: 320px ;
    border : solid red ;
    border-radius:  5px ;
    text-decoration : none
    
    
    
`
const CityContainer = styled.div`
    display : flex ;
    flex-direction: column ;
    align-items: center;
     gap: 20px ;

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
            {citys.cities.map((city,i)=> 
            <Link key={city.name} to={`/hotels/${city.slug}`} >
            <City >
                <img src={`https://trippy-konexio.herokuapp.com/${city.source}`} alt={city.slug}/>                
                <p>{city.name}</p>
            </City>
            </Link>
            )}
        </CityContainer>
    );
};

export default CityCard;
