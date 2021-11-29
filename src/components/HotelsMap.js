import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import HotelMarker from '../components/HotelMarker';

const MapContainer = styled.div`
  height: 100vh;
  width: 50%;
  position : fixed;
  right: 20px;
  
`
const HotelsMap = props => {

    if (!props.hotels) {
        return <p>Chargement...</p>
    }
    
    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{ lat: props.hotels.center.lat, lng: props.hotels.center.lon }}
                defaultZoom={12}
            >
                {props.hotels.results.map(hotel => (
                    <HotelMarker
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