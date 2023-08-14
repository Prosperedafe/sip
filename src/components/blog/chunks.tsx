import { FC } from "react"

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