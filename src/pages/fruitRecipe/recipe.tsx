import { BlogCard } from "../../components/blog/chunks";
import { posts } from "../../components/blog/posts";
import { recipes } from "../../components/blog/recipes";
import { BaseColumn, ReverseColumn } from "./Layout";

const FruitRecipe = () => {

    const getIdFromStorage = JSON.parse(localStorage.getItem("fruit__un-iD") as string);
    const fruitId = parseFloat(getIdFromStorage);
    const fruitDrink = recipes.find(drinkId => drinkId.id === fruitId);

    return (
        <>
            <article style={{ background: fruitDrink?.background }} className="fruit__recipe">
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
            </article>
            <section id="related__articles">
                <h3>Related Articles</h3>
                <div>
                    {posts.slice(0, 3).map((post: any) => {
                        return (
                            <div key={post.id} id="blog__post__all__post">
                                <BlogCard backgroundColor={post.background} image={post.image} title={post.title} paragraph={post.content} userName={post.userName} userImg={post.userImg} time={post.time} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default FruitRecipe;