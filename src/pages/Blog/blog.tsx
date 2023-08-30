import { posts } from "../../components/blog/posts";
import { recipes } from "../../components/blog/recipes";
import { useState } from "react"
import { BlogCard, BlogHero, Recipes } from "../../components/blog/chunks";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate()
    const [activePost, setActiveBlog] = useState<string>("all")

    const [option, setOption] = useState<object>({})

    for (const key in option) {
        localStorage.setItem("fruit__un-iD", JSON.stringify(key));
    }
    const handleClick = (data: object) => {
        const update = { ...option }
        update[data.id] = !option[data.id]
        setOption(update)
    };

    return (
        <section id="blog">
            <BlogHero heading="Exploring the Divine World of Beverages" paragraph="Stay ahead of the curve by delving into the latest mixology trends sweeping the cocktail scene. Discover innovative ingredients, unique flavor combinations, and cutting-edge techniques that are redefining the art of mixology. ." button="Read More" />
            <div className="blog__nav">
                <button className={activePost === "all" ? "active" : ""} onClick={() => setActiveBlog("all")}>All</button>
                <button className={activePost === "trending" ? "active" : ""} onClick={() => setActiveBlog("all")}>Trending</button>
                <button className={activePost === "previous" ? "active" : ""} onClick={() => setActiveBlog("all")}>Previous</button>
                <button className={activePost === "recipes" ? "active" : ""} onClick={() => setActiveBlog("recipes")}>Recipes</button>
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
            {activePost === "recipes" && (
                <article id="blog__post__recipes">
                    {recipes.map((recipe: any) => {
                        return (
                            <section style={{ background: recipe.background }} key={recipe.id}>
                                <button onClick={() => handleClick(recipe)}>save</button>
                                <Recipes title={recipe.title} paragraph={recipe.paragraph} bottle={recipe.bottle} fruit={recipe.fruit} />
                            </section>
                        )
                    })}
                </article>
            )}
        </section>
    )
}
export default Blog;