import { Categories } from "../../components/products/categories";
import { hotDeals, mostSearched, recentlyViewed } from "../Homepage/data";
import { Product } from "../../schema/interface";

const DealOfTheDay = () => {
    const deals: Product[] = hotDeals.map((productData: any) => ({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        rating: productData.rating,
        drink: productData.drink,
    }));
    const searched: Product[] = mostSearched.map((productData: any) => ({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        rating: productData.rating,
        drink: productData.drink,
    }));
    const viewed: Product[] = recentlyViewed.map((productData: any) => ({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        rating: productData.rating,
        drink: productData.drink,
    }));
    return (
        <>
            <section id="deals__day">
                <section id="deals__day__hero">
                    <h2>Deals of the Day</h2>
                    <p>Get 50% off Juice purchases today</p>
                </section>
                <section id="deals__day__deals">
                    <Categories products={deals} />
                    <Categories products={viewed} />
                    <Categories products={searched} />
                </section>
            </section>
        </>
    )
}
export default DealOfTheDay;