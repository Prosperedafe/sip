import { recipes } from "../../components/blog/recipes";

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
                <section className="fruit__recipe__step1">
                    <section>
                        <h3>{fruitDrink?.steps?.heading}</h3>
                        <ul>
                            <li>{fruitDrink?.steps?.step}</li>
                        </ul>
                    </section>
                    <figure>
                        <img src={fruitDrink?.steps?.img} alt={fruitDrink?.title} />
                    </figure>
                </section>
            </section>
        </>
    )
}

export default FruitRecipe;