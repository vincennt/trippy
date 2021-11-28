import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import HotelMarker from '../components/HotelMarker';
// import { useEffect, useState } from 'react';

const MapContainer = styled.div`
  height: 100vh;
  width: 50%;
  position: fixed;
  right: 2%;
`

const HotelMap = props => {

    if (!props.hotels) {
        return <p>Chargement...</p>
    }
    
    console.log('Hotel Map props', props);

    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{ lat: props.center.lat, lng: props.center.lon }}
                defaultZoom={12}
            >
                {props.hotels.map(hotel => (
                    <HotelMarker
                        lat={hotel.location.lat}
                        hotel={hotel}
                        lng={hotel.location.lon}
                    />
                ))}
            </GoogleMapReact>
        </MapContainer>
    );
};

export default HotelMap;