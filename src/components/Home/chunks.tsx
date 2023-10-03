import blackberryChunk from "../../assets/slider/blackberry-chunk.png"
import pineappleChunkc from "../../assets/slider/pineapple-chunk.png"
import appleChunk from "../../assets/slider/apple-chunk.png"
import coconutChunk from "../../assets/slider/coconut-chunk.png"
import grapeChunk from "../../assets/slider/grape-chunk.png"
import strawberryChunk from "../../assets/slider/strawberry-chunk.png"
import watermelonChunk from "../../assets/slider/melon-chunk.png"
import orangeChunk from "../../assets/slider/orange-chunk.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const chunks = [
    {
        chunk: blackberryChunk
    },
    {
        chunk: pineappleChunkc
    },
    {
        chunk: appleChunk
    },
    {
        chunk: coconutChunk
    },
    {
        chunk: grapeChunk
    },
    {
        chunk: strawberryChunk
    },
    {
        chunk: watermelonChunk
    },
    {
        chunk: orangeChunk
    },
]

export const ChunkContainer = () => {
    return (
        <Swiper
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop={true}
            keyboard={{ enabled: true, }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="container">
            {chunks.map((chunk: any, index: number) => {
                return (
                    <SwiperSlide key={index} className="chunk">
                        <img src={chunk.chunk} alt="chunk" />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}