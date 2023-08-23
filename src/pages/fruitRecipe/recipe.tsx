import { recipes } from "../../components/blog/recipes";

const FruitRecipe = () => {

    return (
        <>
            <section style={{ background: recipes[0].background }} className="fruit__recipe">
                <section className="fruit__recipe__name">
                    <div>
                        <h3>{recipes[0].title}</h3>
                        <p>{recipes[0].paragraph}</p>
                    </div>
                    <picture>
                        <img src={recipes[0].fruit} alt={recipes[0].title} />
                        <figure>
                            <img src={recipes[0].bottle} alt={recipes[0].title} />
                        </figure>
                    </picture>
                </section>
            </section>
        </>
    )
}

export default FruitRecipe;