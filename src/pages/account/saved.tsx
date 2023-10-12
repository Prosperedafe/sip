import { AccountNav } from "../../components/AccountNav";
import { Categories } from "../../components/products/categories";
import { hotDeals, mostSearched } from "../Homepage/data";
import { Product } from "../../schema/interface";


const SavedItems = () => {

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

    return (
        <section id="account__saved__items">
            <AccountNav />
            <section id="account__saved__items__items">
                <h2>Saved Items</h2>
                <Categories products={deals} />
                <Categories products={searched} />
            </section>
        </section>
    )
}

export default SavedItems;