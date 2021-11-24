
import {React } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Carousel = (props) => {
 

    //appel API des infos de la home page
   
    // console.log(props)
    return (
        <CarouselProvider
        naturalSlideWidth={150}
        naturalSlideHeight={100}
        totalSlides={3}
        isPlaying={true}
        interva={4000}
      >
        <Slider>
        <Slide index={0}>
            <Image src={"https://picsum.photos/1600/900"} alt="first foto" />
        </Slide>
        <Slide index={1}>
            <Image src="https://picsum.photos/1600/900"  alt="second foto"/>
        </Slide>
        <Slide index={2}>
            <Image src="https://picsum.photos/1600/900"  alt="third foto"/>
        </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
};

export default Carousel;