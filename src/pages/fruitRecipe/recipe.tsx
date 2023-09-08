import { BlogCard } from "../../components/blog/chunks";
import { posts } from "../../components/blog/posts";
import { recipes } from "../../components/blog/recipes";
import { BaseColumn, ReverseColumn } from "./Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, FC, useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const FruitRecipe: FC = () => {
    useEffect(() => {
        // window.startFrom(0, 0)
    })

    const getIdFromStorage = JSON.parse(localStorage.getItem("fruit__un-iD") as string);
    const fruitId = parseFloat(getIdFromStorage);
    const fruitDrink = recipes.find(drinkId => drinkId.id === fruitId);
    const bottleRef = useRef<any>(HTMLImageElement);
    const textRef = useRef<any>(HTMLDivElement);
    const chunkRef = useRef<any>(HTMLImageElement);
    const containerRef = useRef<any>(HTMLDivElement);

    useLayoutEffect(() => {
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
        gsap.fromTo(chunkElem, { translate: "0 70%", scale: .4 }, {
            translate: "0 0", scale: 1, duration: .4, scrollTrigger: {
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