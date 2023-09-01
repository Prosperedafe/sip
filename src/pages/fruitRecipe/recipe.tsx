import { recipes } from "../../components/blog/recipes";
import { BaseColumn, ReverseColumn } from "./Layout";

const FruitRecipe = () => {

    const getIdFromStorage = JSON.parse(localStorage.getItem("fruit__un-iD") as string);
    const fruitId = parseFloat(getIdFromStorage);
    const fruitDrink = recipes.find(drinkId => drinkId.id === fruitId);

    return (
        <>
            <section style={{ background: fruitDrink?.background }} className="fruit__recipe">
                <section className="fruit__recipe__name">
                    <div>
                        <h2>{fruitDrink?.title}</h2>
                        <p>{fruitDrink?.paragraph}</p>
                    </div>
                    <picture>
                        <img src={fruitDrink?.fruit} alt={fruitDrink?.title} />
                        <figure>
                            <img src={fruitDrink?.bottle} alt={fruitDrink?.title} />
                        </figure>
                    </picture>
                </section>
                {fruitDrink?.steps1 ? <ReverseColumn step={fruitDrink?.steps1} /> : <></>}
                {fruitDrink?.steps2 ? <BaseColumn step={fruitDrink?.steps2} /> : <></>}
                {fruitDrink?.steps3 ? <ReverseColumn step={fruitDrink?.steps3} /> : <></>}
                {fruitDrink?.steps4 ? <BaseColumn step={fruitDrink?.steps4} /> : <></>}
                {fruitDrink?.steps5 ? <ReverseColumn step={fruitDrink?.steps5} /> : <></>}
                {fruitDrink?.steps6 ? <BaseColumn step={fruitDrink?.steps6} /> : <></>}
            </section>
        </>
    )
}

export default FruitRecipe;