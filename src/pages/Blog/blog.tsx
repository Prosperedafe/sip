import { posts } from "../../components/blog/posts";
import { recipes } from "../../components/blog/recipes";
import { useEffect, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { BlogCard, BlogHero, Recipes } from "../../components/blog/chunks";
import { useSelector, useDispatch } from "react-redux";
import { setBlogTab, setDrinkId } from "../../store/slice/stateSlice";
import { RelatedArticles } from "../fruitRecipe/recipe";

const Blog: FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activePost = useSelector((state: string | any) => state.state?.blogTab)

    interface Provider {
        id: number,
    }

    const [option, setOption] = useState<any>({})

    for (const key in option) {
        localStorage.setItem("fruit__un-iD", JSON.stringify(key));
        dispatch(setDrinkId(key))
    }
    const checkStorage = useSelector((state: any) => state.state?.drinkId)

    const fruitId = parseFloat(checkStorage);

    const fruitDrink = recipes.find(drinkId => drinkId.id === fruitId);

    const handleClick = (data: Provider) => {
        const update = { ...option }
        update[data.id] = !option[data.id]
        setOption(update)
        setTimeout(() => {
            navigate(`recipe/${JSON.parse(localStorage.getItem("fruit_name") as string)}`)
        }, 300);
    };

    useEffect(() => {
        localStorage.setItem("fruit_name", JSON.stringify(fruitDrink?.route))
    }, [option])

    return (
        <section id="blog">
            <BlogHero heading="Exploring the Divine World of Beverages" paragraph="Stay ahead of the curve by delving into the latest mixology trends sweeping the cocktail scene. Discover innovative ingredients, unique flavor combinations, and cutting-edge techniques that are redefining the art of mixology. ." />
            <div className="blog__nav">
                <button className={activePost === "all" ? "active" : ""} onClick={() => dispatch(setBlogTab("all"))}>All</button>
                <button className={activePost === "trending" ? "active" : ""} onClick={() => dispatch(setBlogTab("trending"))}>Trending</button>
                <button className={activePost === "previous" ? "active" : ""} onClick={() => dispatch(setBlogTab("previous"))}>Previous</button>
                <button className={activePost === "recipes" ? "active" : ""} onClick={() => dispatch(setBlogTab("recipes"))}>Recipes</button>
            </div>
            {activePost === "all" && (
                <section id="blog__post__all">
                    {posts.map((post: any) => {
                        return (
                            <div key={post.id} id="blog__post__all__post">
                                <BlogCard backgroundColor={post.background} image={post.image} title={post.title} paragraph={post.content} userName={post.userName} userImg={post.userImg} time={post.time} />
                            </div>
                        )
                    })}
                </section>
            )}
            {activePost === "trending" && (
                <section id="blog__post__all">
                    {posts.slice(2, 5).reverse().map((post: any) => {
                        return (
                            <div key={post.id} id="blog__post__all__post">
                                <BlogCard backgroundColor={post.background} image={post.image} title={post.title} paragraph={post.content} userName={post.userName} userImg={post.userImg} time={post.time} />
                            </div>
                        )
                    })}
                </section>
            )}
            {activePost === "previous" && (
                <section id="blog__post__all">
                    {posts.slice(4, 7).reverse().map((post: any) => {
                        return (
                            <div key={post.id} id="blog__post__all__post">
                                <BlogCard backgroundColor={post.background} image={post.image} title={post.title} paragraph={post.content} userName={post.userName} userImg={post.userImg} time={post.time} />
                            </div>
                        )
                    })}
                </section>
            )}
            {activePost === "recipes" && (
                <>
                    <article id="blog__post__recipes">
                        {recipes.map((recipe: any) => {
                            return (
                                <section style={{ background: recipe.background }} key={recipe.id}>
                                    <Recipes onClick={() => handleClick(recipe)} title={recipe.title} paragraph={recipe.paragraph} bottle={recipe.bottle} fruit={recipe.fruit} />
                                </section>
                            )
                        })}
                    </article>
                    <RelatedArticles />
                </>
            )}
        </section>
    )
}
export default Blog;