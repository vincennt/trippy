
import { React } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Carousel = (props) => {

    
    //appel API des infos de la home page

    // console.log(props)
    return (
        <CarouselProvider
            naturalSlideWidth={15}
            naturalSlideHeight={10}
            totalSlides={11}
            isPlaying
            interval={3000}
            infinite
        >
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            <Slider>
                <Slide index={0}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_18.jpg" alt="zero foto" />
                </Slide>
                <Slide index={1}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_19.jpg" alt="first foto" />
                </Slide>
                <Slide index={2}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_24.jpg" alt="second foto" />
                </Slide>
                <Slide index={3}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_25.jpg" alt="third foto" />
                </Slide>
                <Slide index={4}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_25.jpg" alt="four foto" />
                </Slide>
                <Slide index={5}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_30.jpg" alt="five foto" />
                </Slide>
                <Slide index={6}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10541730_48.jpg" alt="six foto" />
                </Slide>
                <Slide index={7}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/12533513_10.jpg" alt="seven foto" />
                </Slide>
                <Slide index={8}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/11621939_32.jpg" alt="eight foto" />
                </Slide>
                <Slide index={9}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/112064_45.jpg" alt="nine foto" />
                </Slide>
                <Slide index={10}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/11854022_21.jpg" alt="ten foto" />
                </Slide>
            </Slider>
        </CarouselProvider>
    );
};

export default Carousel;