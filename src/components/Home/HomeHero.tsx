import { Anmeties } from "./anmeties";
import blackberry from "../../assets/slider/blackberry.svg"
import bbc from "../../assets/slider/blackberry-chunk.png"

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
        <figure className="home__hero__slider">
            <img src={blackberry} className="fruit__img" alt="" />
            <figcaption>Blackberry</figcaption>
            <Chunks />
        </figure>
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