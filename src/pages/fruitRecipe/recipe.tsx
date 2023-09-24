import { BlogCard } from "../../components/blog/chunks";
import { posts } from "../../components/blog/posts";
import { recipes } from "../../components/blog/recipes";
import { BaseColumn, ReverseColumn } from "./Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger)


export const RelatedArticles = () => {
    return (
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
    )
}

const FruitRecipe: FC = () => {
    const navigate = useNavigate()

    const getIdFromStorage = JSON.parse(localStorage.getItem("fruit__un-iD") as string);
    const fruitId = parseFloat(getIdFromStorage);
    const fruitDrink = recipes.find(drinkId => drinkId.id === fruitId);
    const bottleRef = useRef<any>(HTMLImageElement);
    const textRef = useRef<any>(HTMLDivElement);
    const chunkRef = useRef<any>(HTMLImageElement);
    const containerRef = useRef<any>(HTMLDivElement);

    useEffect(() => {
        const bottleElem = bottleRef.current
        gsap.fromTo(bottleElem, { translate: "0 70%" }, {
            translate: "0 0", duration: .4, scrollTrigger: {
                trigger: bottleElem
            }
        })
        const textElem = textRef.current
        gsap.fromTo(textElem, { translate: "0 70%" }, {
            translate: "0 0", duration: .4, scrollTrigger: {
                trigger: textElem
            }
        })
        const chunkElem = chunkRef.current
        gsap.fromTo(chunkElem, { scale: .2 }, {
            scale: 1, duration: .4, scrollTrigger: {
                trigger: chunkElem
            }
        })
        const containerElem = containerRef.current
        gsap.fromTo(containerElem, { paddingTop: "20rem", }, {
            paddingTop: "0", duration: .6, scrollTrigger: {
                trigger: containerElem
            }
        })
    }, []);

    return (
        <>
            <div className="blog-back-btn">
                <button onClick={() => navigate("/blog")}>
                    <svg width="15" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L0 6L6 0L7.4 1.4L3.8 5H18V7H3.8L7.4 10.6L6 12Z" fill="white" />
                    </svg>
                    <span>back</span>
                </button>
            </div>
            <article style={{ background: fruitDrink?.background }} className="fruit__recipe">
                <section ref={containerRef} className="fruit__recipe__name">
                    <div className="container">
                        <div className="hide">
                            <h2>{fruitDrink?.title}</h2>
                            <p>{fruitDrink?.paragraph}</p>
                        </div>
                        <div className="show" ref={textRef}>
                            <h2>{fruitDrink?.title}</h2>
                            <p>{fruitDrink?.paragraph}</p>
                        </div>
                    </div>
                    <picture>
                        <img src={fruitDrink?.fruit} alt={fruitDrink?.title} ref={chunkRef} />
                        <figure>
                            <img src={fruitDrink?.bottle} alt={fruitDrink?.title} ref={bottleRef} />
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
            <RelatedArticles />
        </>
    )
}

export default FruitRecipe;