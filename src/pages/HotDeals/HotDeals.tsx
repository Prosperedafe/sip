import { Categories } from "../../components/products/categories";
import { hotDeals, mostSearched, recentlyViewed } from "../Homepage/data";

const DealOfTheDay = () => {
    return (
        <>
            <section id="deals__day">
                <section id="deals__day__hero">
                    <h2>Deals of the Day</h2>
                    <p>Get 50% off Juice purchases today</p>
                </section>
                <section id="deals__day__deals">
                    <Categories products={hotDeals} />
                    <Categories products={recentlyViewed} />
                    <Categories products={mostSearched} />
                </section>
            </section>
        </>
    )
}
export default DealOfTheDay;