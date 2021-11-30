import { React, useState } from 'react';
import HotelCard from '../components/HotelCard';
import Nav from '../components/Nav';
import styled from 'styled-components';



const Flex = styled.div`
display : flex;
flex-direction :column;
align-items : center
`
const BouttonContainer = styled.div`
display : flex ; 
justify-content: center;
margin: 10px;
margin-left: 35px;
gap 4px;
`
const Div = styled.div
    `width: 100%;`

const Button = styled.button`

	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:2px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;


.myButton:hover {
	background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	background-color:#f6f6f6;
}
.myButton:active {
	position:relative;
	top:2px;
}
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
        <div>
        <Flex>
            <Div>
                <Nav />
                <HotelCard pageNumber={page} />
            </Div>
        </Flex>
         <BouttonContainer>
         <Button onClick={() => handleClick(1)}>1</Button>
         <Button onClick={() => handleClick(2)}>2</Button>
         <Button onClick={() => handleClick(3)}>3</Button>
         <Button onClick={() => handleClick(4)}>4</Button>
        </BouttonContainer>
     </div>
    )
}


export default Hotels;


