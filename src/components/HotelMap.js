import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import HotelMarker from '../components/HotelMarker';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`
const HotelMap = props => {

    if (!props.hotels) {
        return <p>Chargement...</p>
    }

    console.log('line 33 message', props);

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
                    />
                ))}
            </GoogleMapReact>
        </MapContainer>
    );
};

export default HotelMap;