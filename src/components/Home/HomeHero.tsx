import apple from "../../assets/slider/Apple.png"
import grapes from "../../assets/slider/Grapes.png"
import orange from "../../assets/slider/Orange.png"
import coconut from "../../assets/slider/Coconut.svg"
import pineapple from "../../assets/slider/Pineaplle.png"
import blackberry from "../../assets/slider/blackberry.png"
import strawberry from "../../assets/slider/strawberry.png"
import watermelon from "../../assets/slider/Watermelon.png"
import appleChunk from "../../assets/slider/apple-chunk.png"
import grapeChunk from "../../assets/slider/grape-chunk.png"
import orangeChunk from "../../assets/slider/orange-chunk.png"
import coconutChunk from "../../assets/slider/coconut-chunk.png"
import pineappleChunk from "../../assets/slider/pineapple-chunk.png"
import strawberryChunk from "../../assets/slider/strawberry-chunk.png"
import blackberryChunk from "../../assets/slider/blackberry-chunk.png"
import watermelonChunk from "../../assets/slider/melon-chunk.png"
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Anmeties } from "./anmeties";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Keyboard } from 'swiper/modules';

const drinks = [
    {
        name: "BlackBerry",
        drink: blackberry,
        background: "#C485B1",
        chunk: blackberryChunk
    },
    {
        name: "Pineapple",
        drink: pineapple,
        background: "#C5BD87",
        chunk: pineappleChunk
    },
    {
        name: "Apple",
        drink: apple,
        background: "#98C587",
        chunk: appleChunk
    },
    {
        name: "Coconut",
        drink: coconut,
        background: "#C5A187",
        chunk: coconutChunk
    },
    {
        name: "Grapes",
        drink: grapes,
        background: "#C5878D",
        chunk: grapeChunk
    },
    {
        name: "StrawBerry",
        drink: strawberry,
        background: "#C59287",
        chunk: strawberryChunk
    },
    {
        name: "Watermelon",
        drink: watermelon,
        background: "#C58797",
        chunk: watermelonChunk
    },
    {
        name: "Orange",
        drink: orange,
        background: "#C5BC87",
        chunk: orangeChunk
    },
]

const Slider = () => {
    return (
        <div className="home__hero__swiper-cover">
            <Swiper
                modules={[EffectFade, Navigation, Autoplay, Keyboard]}
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                navigation={true}
                loop={true}
                className="swiper home__hero__swiper-cover__slider"
                keyboard={{ enabled: true, }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}>
                {drinks.map((drink: any, index: number) => {
                    return (
                        <SwiperSlide style={{ background: drink.background }} key={index} className="home__hero__swiper-cover__slider__slides">
                            <figure>
                                <img src={drink.drink} className="fruit__img" alt={drink.name} />
                                <figcaption>{drink.name}</figcaption>
                            </figure>
                            <div className="chunks">
                                <div className="chunks__container">
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                    <img src={drink.chunk} alt="chunks" />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export const HomeHero = () => {
    return (
        <section className="home__hero">
            <Slider />
            <Anmeties />
        </section>
    )
}