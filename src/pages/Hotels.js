import { React, useState } from 'react';
import HotelCard from '../components/HotelCard';
import Nav from '../components/Nav';
import styled from 'styled-components';


const BouttonContainer= styled.div`
display : flex;
position: absolute;
left: 50%;
gap: 10px;
top: 95%;
z-index:1
}
`

const Button =styled.button`

    width: 30px;
    height: 30px;
    border-radius: 50px;
    border: black , solid ,2px;

`





const Hotels = (props) => {

    const [page, setPage] = useState(0);


    function handleClick(page) {
        setPage(page)
    }

    // console.log(page)
    //  const { city } = useParams()
    // console.log(`"from hotel:"${city}`);
    return (
        <>
        <div>
            <Nav />
            <HotelCard pageNumber={page} />
        </div>
        <BouttonContainer>
                <Button onClick={() => handleClick(1)}>1</Button>
                <Button onClick={() => handleClick(2)}>2</Button>
                <Button onClick={() => handleClick(3)}>3</Button>
                <Button onClick={() => handleClick(4)}>4</Button>
            </BouttonContainer>
       </>
    )
}


export default Hotels;


