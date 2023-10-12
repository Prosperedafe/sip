import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, FC, useLayoutEffect } from "react";
import { recipes, contentprops, postProps } from "../../schema/interface";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger)

export const BlogHero: FC<contentprops> = ({ heading, paragraph }) => {
    return (
        <section className="blog__hero__section">
            <div>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
                {/* {button && <button>{button}</button>} */}
            </div>
        </section>
    )
}

export const BlogCard: FC<postProps> = ({ title, paragraph, image, userImg, userName, time, backgroundColor }) => {
    const navigate = useNavigate()

    return (
        <article style={{ background: backgroundColor }}>
            <figure>
                <img src={image} alt={userName} />
            </figure>
            <div className="post">
                <h3 className="post__title">{title}</h3>
                <p className="post__content">{paragraph}</p>
                <div className="post__details">
                    <img className="user" src={userImg} alt={userName} />
                    <div>
                        <h4 className="userName">{userName}</h4>
                        <p className="time" role="time">{time}</p>
                    </div>
                </div>
                <button onClick={() => navigate("/blog/news")}>Read More</button>
            </div>
        </article>
    )
}

export const Recipes: FC<recipes> = ({ bottle, fruit, title, paragraph, onClick }) => {
    const bottleRef = useRef<any>(HTMLImageElement);
    const textRef = useRef<any>(HTMLDivElement);
    const chunkRef = useRef<any>(HTMLImageElement);

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
        gsap.fromTo(chunkElem, { translate: "0 0%", scale: .2 }, {
            translate: "0 0", scale: 1, duration: .4, scrollTrigger: {
                trigger: chunkElem
            }
        })
    }, []);

    return (
        <>
            <div>
                <div className="visible__layer" ref={textRef}>
                    <h3>{title}</h3>
                    <p>{paragraph}</p>
                    <button onClick={onClick}>Read More</button>
                </div>
                <div className="hidden__layer">
                    <h3>{title}</h3>
                    <p>{paragraph}</p>
                    <button onClick={onClick}>Read More</button>
                </div>
            </div>
            <picture>
                <img src={fruit} alt={title} ref={chunkRef} />
                <figure>
                    <img src={bottle} alt={title} ref={bottleRef} />
                </figure>
            </picture>
        </>
    )
}
