import styled from 'styled-components'

const P = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    font-family: 'PT Sans', sans-serif;
    font-size : 13px;
    margin-left:2px,
`

const DivContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 5px;
`

const Div = styled.div`
    display :flex;
    flex-direction : column;
    justify-content : center;
    width: 150px ;
    margin-left: 45px;
`

const Room = props => {

    return (
        <>
        <DivContainer>
            <Div>
                <P>Price : {props.room.price}</P>
                <P>People: {props.room.people}</P>
                {props.room.isBathroom ? <P>Bathroom: yes</P> : <P>Bathroom: no</P>}
            </Div>
        </DivContainer>
        </>
    )
}

export default Room;