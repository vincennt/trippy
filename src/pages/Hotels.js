import {React} from 'react';

import HotelCard from '../components/HotelCard';
import Nav from '../components/Nav';




const Hotels = (props) => {
    
//  const { city } = useParams()
    // console.log(`"from hotel:"${city}`);
    return (
        <div>
            <Nav/>
           <HotelCard/>
        </div>
        )
    }


export default Hotels;


