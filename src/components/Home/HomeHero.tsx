import hero from "../../assets/images/hero.png";
import { Anmeties } from "./anmeties";

export const HomeHero = () => {
    return (
        <section className="home__hero">
            <img src={hero} alt="" />
            <Anmeties />
        </section>
    )
}