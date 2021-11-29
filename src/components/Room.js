import styled from 'styled-components'

const P = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    font-family: 'PT Sans', sans-serif;
    font-size : 16.5px;
    margin-left: 2px,
`

const DivContainer = styled.div`
    display: flex;
`
    
const Div = styled.div`
    background-color: blue;
    width: 150px;    
    margin: 50px;
    grid-gap: 12px
`

const Room = props => {

    return (
        <DivContainer>
            <Div>
                <P>Price : {props.room.price}</P>
                <P>People: {props.room.people}</P>
                {props.room.isBathroom ? <P>Bathroom: yes</P> : <P>Bathroom: no</P>}
            </Div>
        </DivContainer>
    )
}

export default Room;