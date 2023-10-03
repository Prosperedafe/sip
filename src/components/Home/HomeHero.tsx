import { Anmeties } from "./anmeties";
import blackberry from "../../assets/slider/blackberry.svg"
import pineapple from "../../assets/slider/Pineaplle.svg"
import apple from "../../assets/slider/Apple.png"
import coconut from "../../assets/slider/Coconut.png"
import grapes from "../../assets/slider/Grapes.png"
import strawberry from "../../assets/slider/strawberry.svg"
import watermelon from "../../assets/slider/watermelon.svg"
import orange from "../../assets/slider/Orange.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { ChunkContainer } from "./chunks";

const drinks = [
    {
        name: "BlackBerry",
        drink: blackberry,
        background: "#C485B1"
    },
    {
        name: "Pineapple",
        drink: pineapple,
        background: "#C5BD87"
    },
    {
        name: "Apple",
        drink: apple,
        background: "#98C587"
    },
    {
        name: "Coconut",
        drink: coconut,
        background: "#C5A187"
    },
    {
        name: "Grapes",
        drink: grapes,
        background: "#C5878D"
    },
    {
        name: "StrawBerry",
        drink: strawberry,
        background: "#C59287"
    },
    {
        name: "Watermelon",
        drink: watermelon,
        background: "#C58797"
    },
    {
        name: "Orange",
        drink: orange,
        background: "#C5BC87"
    },
]



const Chunks = () => {
    return (
        <div className="home__hero__chunks">
            <div>
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
                <ChunkContainer />
            </div>
        </div>
    )
}

const Slider = () => {
    return (
        <div className="home__hero__swiper-cover">
            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                navigation
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
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Chunks />
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