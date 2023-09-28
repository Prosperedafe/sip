import { Anmeties } from "./anmeties";
import blackberry from "../../assets/slider/blackberry.svg"
import bbc from "../../assets/slider/blackberry-chunk.png"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const drinks = [
    {
        name: "BlackBerry",
        drink: blackberry,
        background: "#C485B1"
    },
    {
        name: "Pineapple",
        drink: blackberry,
        background: "#C485B1"
    },
    {
        name: "Apple",
        drink: blackberry,
        background: "#C485B1"
    },
    {
        name: "Coconut",
        drink: blackberry,
        background: "#C485B1"
    },
    {
        name: "Grapes",
        drink: blackberry,
        background: "#C485B1"
    },
    {
        name: "StrawBerry",
        drink: blackberry,
        background: "#C485B1"
    },
    {
        name: "Watermelon",
        drink: blackberry,
        background: "#C485B1"
    },
    {
        name: "Orange",
        drink: blackberry,
        background: "#C485B1"
    },
]

const chunks = [
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
    {
        chunk: bbc
    },
]

const Chunks = () => {
    return (
        <div className="home__hero__chunks">
            <div className="container">
                {chunks.map((chunk: any, index: number) => {
                    return (
                        <div key={index} className="chunk">
                            <img src={chunk.chunk} alt="chunk" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="swipe-drink-slide"
            keyboard={{ enabled: true, }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {drinks.map((drink: any, index: number) => {
                return (
                    <SwiperSlide style={{ background: drink.background }} key={index} className="home__hero__slider">
                        <figure>
                            <img src={drink.drink} className="fruit__img" alt={drink.name} />
                            <figcaption>{drink.name}</figcaption>
                        </figure>
                        <Chunks />
                    </SwiperSlide>
                )
            })}
        </Swiper>
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