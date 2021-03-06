import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import HotelMark from '../components/HotelMark';

const MapContainer = styled.div`
    height: 50vh;
    width: 95%;
    margin: 20px;

    @media (min-width : 725px){
        margin-left: 40px;
    }
`
const HotelsMap = props => {

    const coords = { lat: props.center.lat, lng: props.center.lon }
    
    if (!props.hotels) {
        return <p>Chargement...</p>
    }

    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={coords}
                defaultZoom={14}
            >                
                {props.hotels.map(hotel => (
                    <HotelMark
                        key={hotel.name}  
                        lat={hotel.location.lat}
                        hotel={hotel}
                        lng={hotel.location.lon}
                        selectHotel={props.selectHotel}
                        setSelectHotel={props.setSelectHotel}
                    />
                ))}

            </GoogleMapReact>
        </MapContainer>
    );
};

export default HotelsMap;