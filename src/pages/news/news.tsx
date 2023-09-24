import { BlogHero } from "../../components/blog/chunks";
import { RelatedArticles } from "../fruitRecipe/recipe";
import intro from "../../assets/images/beerintro.png";
import conclusion from "../../assets/images/conclusion.png"
import spirits from "../../assets/images/spirits.png"
import beer from "../../assets/images/beer.png"
import wine from "../../assets/images/wine.png"
import senerity from "../../assets/images/senerity.png"

const beerRecipe: Array<object> = [
    {
        heading: "Introduction",
        paragraph: "Embark on a captivating exploration of the divine world of beverages, where taste, aroma, and enjoyment converge to create a sensory symphony. From the rich traditions of tea and coffee to the indulgent realms of wine, beer, and beyond, this article invites you to immerse yourself in a divine experience that transcends ordinary thirst-quenching.",
        image: intro
    },
    {
        heading: "1. The Elixir of Serenity",
        paragraph: "Delve into the ancient traditions and meditative rituals surrounding tea as you discover its diverse nuances and soothing properties. From delicate green teas to robust oolongs and herbal infusions, unlock the secrets of brewing techniques, savor the subtle flavors, and embrace the tranquility that a cup of tea brings to your everyday life.",
        image: senerity
    },
    {
        heading: "2. Wine",
        paragraph: "Uncorking the Secrets of the Vineyard Immerse yourself in the elegance and sophistication of the world's oldest and most celebrated beverage. From the vineyards to the cellar, explore the intricacies of grape varieties, terroir, and winemaking techniques. Unleash your inner sommelier as you learn to appreciate the symphony of flavors and aromas that dance upon your palate, and discover the art of food and wine pairing.",
        image: wine
    },
    {
        heading: "3. Beer",
        paragraph: "A Craft of Bold Flavors and Brewing Mastery Raise a glass to the dynamic and ever- evolving world of beer, where craftsmanship and innovation collide.Journey through the vast range of beer styles, from hop - forward IPAs to rich and velvety stouts, as you explore the techniques and ingredients that make each brew unique.Immerse yourself in the beer culture, celebrate the artistry of brewing, and savor the complexities of this beloved beverage.",
        image: beer
    },
    {
        heading: "4. Beyond the Spirits",
        paragraph: "Exploring Exquisite Mocktails and Artisanal Infusions Step into a world where non- alcoholic beverages take center stage, offering delightful alternatives that captivate the senses.Delve into the realm of mocktails, where expert mixology blends fruits, herbs, and spices to create enticing and refreshing concoctions.Or embrace the art of artisanal infusions, where botanicals and natural ingredients steep in harmony to create enchanting elixirs that elevate any occasion.",
        image: spirits
    },
    {
        heading: "Conclusion",
        paragraph: "Embark on an extraordinary journey through the divine world of beverages, where every sip offers an opportunity to indulge your senses and explore new realms of pleasure. From the calming serenity of tea to the invigorating embrace of coffee, the refined elegance of wine, the boldness of beer, and the creativity of non-alcoholic creations, this is a world that invites you to savor, celebrate, and discover. So, raise your glass and join us on this divine odyssey through flavors and pleasures that will leave an indelible mark on your palate and memories. Cheers to the divine world of beverages!",
        image: conclusion
    },
]

export const News = () => {
    return (
        <>
            <BlogHero heading="Exploring the Divine World of Beverages" paragraph="Stay ahead of the curve by delving into the latest mixology trends sweeping the cocktail scene. Discover innovative ingredients, unique flavor combinations, and cutting-edge techniques that are redefining the art of mixology. ." />
            <article className="blog__beer__recipe">
                {beerRecipe.map((recipe: any, index: number) => {
                    return (
                        <section key={index}>
                            <div>
                                <h3>{recipe.heading}</h3>
                                <p>{recipe.paragraph}</p>
                            </div>
                            <figure>
                                <img src={recipe.image} alt={recipe.heading} />
                            </figure>
                        </section>
                    )
                })}
            </article>
            <RelatedArticles />
        </>
    )
}