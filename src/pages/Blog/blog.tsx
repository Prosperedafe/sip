import { posts } from "../../components/blog/posts";
import { BlogCard, BlogHero } from "../../components/blog/chunks";

const Blog = () => {
    return (
        <section id="blog">
            <BlogHero heading="Exploring the Divine World of Beverages" paragraph="Stay ahead of the curve by delving into the latest mixology trends sweeping the cocktail scene. Discover innovative ingredients, unique flavor combinations, and cutting-edge techniques that are redefining the art of mixology. ." button="Read More" />
            <section id="blog__post">
                {posts.map((post: any) => {
                    return (
                        <div key={post.id} id="blog__post__post">
                            <BlogCard backgroundColor={post.background} image={post.image} title={post.title} paragraph={post.content} userName={post.userName} userImg={post.userImg} time={post.time} />
                        </div>
                    )
                })}
            </section>
        </section>
    )
}
export default Blog;