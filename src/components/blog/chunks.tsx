import { FC } from "react";

interface contentprops {
    heading: string,
    paragraph: string,
    button?: string
}

export const BlogHero: FC<contentprops> = ({ heading, paragraph, button }) => {
    return (
        <section className="blog__hero__section">
            <div>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
                <button>{button}</button>
            </div>
        </section>
    )
}

interface postProps {
    title: string,
    paragraph: string,
    image: string,
    userImg: string,
    userName: string,
    time: string,
    backgroundColor: string,
}

export const BlogCard: FC<postProps> = ({ title, paragraph, image, userImg, userName, time, backgroundColor }) => {
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
                <button>Read More</button>
            </div>
        </article>
    )
}