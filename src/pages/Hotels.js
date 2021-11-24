import {React , useState} from 'react';

import HotelCard from '../components/HotelCard';
import Nav from '../components/Nav';

const Hotels = (props) => {
    
    const [page, setPage] = useState(0);


     function handleClick(page) {
      setPage(page)
    }
      
    // console.log(page)
//  const { city } = useParams()
    // console.log(`"from hotel:"${city}`);
    return (
        <div>
            <Nav/>
           <HotelCard pageNumber={page}/>
           <button onClick={() => handleClick(1)}>1</button>
           <button onClick={() => handleClick(2)}>2</button>
           <button onClick={() => handleClick(3)}>3</button>
           <button onClick={() => handleClick(4)}>4</button>
        </div>
        )
    }


export default Hotels;


