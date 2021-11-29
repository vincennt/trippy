
import { React } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Carousel = (props) => {


    //appel API des infos de la home page

    // console.log(props)
    return (
        <CarouselProvider
            naturalSlideWidth={150}
            naturalSlideHeight={100}
            totalSlides={11}
            isPlaying={true}
            interva={3000}
        >
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            <Slider>
                <Slide index={0}>
                    <Image src="https://picsum.photos/1600/900" alt="zero foto" />
                </Slide>
                <Slide index={1}>
                    <Image src="https://picsum.photos/1600/900/" alt="first foto" />
                </Slide>
                <Slide index={2}>
                    <Image src="https://picsum.photos/1600/900/" alt="second foto" />
                </Slide>
                <Slide index={3}>
                    <Image src="https://picsum.photos/1600/900/" alt="third foto" />
                </Slide>
                <Slide index={4}>
                    <Image src="https://picsum.photos/1600/900/" alt="four foto" />
                </Slide>
                <Slide index={5}>
                    <Image src="https://picsum.photos/1600/900/" alt="five foto" />
                </Slide>
                <Slide index={6}>
                    <Image src="https://picsum.photos/1600/900" alt="six foto" />
                </Slide>
                <Slide index={7}>
                    <Image src="https://picsum.photos/1600/900" alt="seven foto" />
                </Slide>
                <Slide index={8}>
                    <Image src="https://picsum.photos/1600/900" alt="eight foto" />
                </Slide>
                <Slide index={9}>
                    <Image src="https://picsum.photos/1600/900" alt="nine foto" />
                </Slide>
                <Slide index={10}>
                    <Image src="https://picsum.photos/1600/900" alt="ten foto" />
                </Slide>
            </Slider>
        </CarouselProvider>
    );
};

export default Carousel;