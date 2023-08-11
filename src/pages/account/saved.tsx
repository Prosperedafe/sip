import { AccountNav } from "../../components/AccountNav";
import { Categories } from "../../components/products/categories";
import { hotDeals, mostSearched } from "../Homepage/data";



const SavedImtes = () => {

    return (
        <section id="account__saved__items">
            <AccountNav />
            <section id="account__saved__items__items">
                <h2>Saved Items</h2>
                <Categories products={hotDeals} />
                <Categories products={mostSearched} />
            </section>
        </section>
    )
}

export default SavedImtes;