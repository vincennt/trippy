import GoogleMapReact from 'google-map-react';
// import styled from 'styled-components';
import { useEffect } from 'react';

const HotelMap = () => {

    // (hook) équivalent du composantDidMount
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            location => {
                console.log(location.coords);
            }
        )
    }, [])

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }} 
                defaultCenter={{ lat: 48.8666883, lng: 2.4174073 }}
                defaultZoom={25}
            >
            </GoogleMapReact>
        </div>
    );
};

export default HotelMap;