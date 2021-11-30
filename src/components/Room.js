import styled from 'styled-components'

const P = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    font-family: 'PT Sans', sans-serif;
    font-size : 16.5px;
    margin-left: 2px,
`

const DivContainer = styled.div`
    display: flex;
    margin: 10px auto;
`
    
const Div = styled.div`
    border: 2px solid #69B1AE;
    border-radius: 10px;
    width: 150px;    
    margin: 10px ;
    grid-gap: 12px;
    text-align: center;
`

const Room = props => {

    return (
        <DivContainer>
            <Div>
                <P>Price : {props.room.price}€</P>
                <P>People: {props.room.people}</P>
                {props.room.isBathroom ? <P>Bathroom: yes</P> : <P>Bathroom: no</P>}
            </Div>
        </DivContainer>
    )
}

export default Room;