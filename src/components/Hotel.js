import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import ReactStars from 'react-rating-stars-component';

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
    padding: 0 0 10px  0;
    margin: 20px;
    height: 380px; 
    background-color: ${props => (props.color ? "#9BE895" : "#dbdbdb")};
`
const Image = styled.img`
    background-image: url("src");
    width: 300px ;
    height : 250px;
    border-radius:  10px 10px 0 0;
`
const P = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    font-family: 'PT Sans', sans-serif;
    font-size : 13px;
    margin-left:2px,
`
const Dive = styled.div`
    margin : 5px;
`

const Button = styled.button`
    box-shadow: 0px 1px 0px 0px #fff6af;
	background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
	background-color:#ffec64;
	border-radius: 0 0 6px 6px;
	border:none;
	display:inline-block;
	cursor:pointer;
	color:#333333;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding: 10px 34px ;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffee66;
`

const HotelScroll = props => {
    const ref = useRef()
    const { city } = useParams()

    useEffect(() => {
        if (props.hotel._id === props.selectHotel._id) {
            ref.current.scrollIntoView({ behavior: "smooth" })
            console.log(props.selectHotel)
        }
    }, [props.selectHotel, props.hotel._id])


    return (

        <Hotel key={props.hotel.name} ref={ref} color={props.hotel._id === props.selectHotel._id}
            onClick={() => {
                props.setSelectHotel(props.hotel)
            }}
            onMouseLeave={() => {
                props.setSelectHotel({})
            }}>
            <Link key={props.hotel._id} to={`/hotels/${city}/${props.hotel._id}`}>
                <Image
                    src={props.src}
                    alt={props.hotel.name} />
            </Link>
            <Dive>
                <P>{props.hotel.name}</P>
                <P>{props.hotel.price}€</P>
                <P>Stars :  <ReactStars
                    count={5}
                    size={24}
                    value={props.hotel.stars}
                    edit={true}
                    activeColor="#ffd700"
                /></P>
            </Dive>

            <Button onClick={() => props.handleAddStorage(props.hotel._id)}>Add Fav</Button>

        </Hotel>
    );
};

export default HotelScroll;