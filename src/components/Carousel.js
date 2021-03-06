import { React } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components'

const ButtonSpace = styled.div`
margin: 10px;
padding : 10px;
display: flex;
justify-content: space-between;

`


const Carousel = (props) => {

    //appel API des infos de la home page
    // console.log(props)
    return (
        <CarouselProvider
            naturalSlideWidth={240}
            naturalSlideHeight={120}
            totalSlides={11}
            isPlaying
            interval={3000}
            infinite
        >
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
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_25.jpg" alt="fourth foto" />
                </Slide>
                <Slide index={5}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_30.jpg" alt="fifth foto" />
                </Slide>
                <Slide index={6}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10541730_48.jpg" alt="sixth foto" />
                </Slide>
                <Slide index={7}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/12533513_10.jpg" alt="seventh foto" />
                </Slide>
                <Slide index={8}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/11621939_32.jpg" alt="eighth foto" />
                </Slide>
                <Slide index={9}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/112064_45.jpg" alt="ninth foto" />
                </Slide>
                <Slide index={10}>
                    <Image src="https://trippy-konexio.herokuapp.com/img/hotels/11854022_21.jpg" alt="tenth foto" />
                </Slide>
            </Slider>
            <ButtonSpace>
            <ButtonBack style={{background: "transparent", border: "none"}}><AiOutlineArrowLeft size="40px" /></ButtonBack>
            <ButtonNext style={{background: "transparent", border: "none"}}><AiOutlineArrowRight size="40px" /></ButtonNext>
            </ButtonSpace>
        </CarouselProvider>
    );
};

export default Carousel;