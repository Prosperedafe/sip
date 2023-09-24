import wine from "../../assets/images/secret wine.png";
import beer from "../../assets/images/haven beer.png";
import elixer from "../../assets/images/elixer spitit.png";
import squezzed from "../../assets/images/fruit juice.png";
import trial from "../../assets/images/trial.png";
import rating from "../../assets/icons/Ratings.svg";
import reviewDp from "../../assets/icons/review-dp.png";
import { HomeHero } from "../../components/Home/HomeHero";
import { Categories } from "../../components/products/categories";
import { hotDeals, mostSearched, recentlyViewed } from "./data";
import { Faq } from "../../components/faq";

const HomePage = () => {
    return (
        <section id="home__page">
            <HomeHero />
            <img src="" alt="" />
            <section className="categories">
                <div className="heading">
                    <h2>Categories</h2>
                    {/* <button>See More</button> */}
                </div>
                <div className="categories__drinks">
                    <figure>
                        <img src={squezzed} alt="Freshly Squeezed Delight Fruit Juice" />
                        <figcaption>Freshly Squeezed Delight Fruit Juice</figcaption>
                    </figure>
                    <figure>
                        <img src={wine} alt="Vineyard's Secret Wine" />
                        <figcaption>Vineyard's Secret Wine</figcaption>
                    </figure>
                    <figure>
                        <img src={elixer} alt="Craft Alchemist's Elixir Spirit" />
                        <figcaption>Craft Alchemist's Elixir Spirit</figcaption>
                    </figure>
                    <figure>
                        <img src={beer} alt="Brewmaster's Haven Beer" />
                        <figcaption>Brewmaster's Haven Beer</figcaption>
                    </figure>
                </div>
            </section>
            <section className="hot__deals">
                <div className="heading">
                    <h2>Hot Deals</h2>
                    <button>See More</button>
                </div>
                <Categories products={hotDeals} />
            </section>
            <section className="most__searched">
                <div className="heading">
                    <h2>Most Searched</h2>
                    <button>See More</button>
                </div>
                <Categories products={mostSearched} />
            </section>
            <section className="recently__viewed">
                <div className="heading">
                    <h2>Recently viewed</h2>
                    <button>See More</button>
                </div>
                <Categories products={recentlyViewed} />
            </section>
            <section className="trial">
                <div>
                    <h2>A Trial will Convince you</h2>
                    <p>Order a Free Sample Drink of your Choice</p>
                    <button>Add to Cart</button>
                </div>
                <figure>
                    <img src={trial} alt="trial" />
                </figure>
            </section>
            <div className="qualities">
                <section>
                    <h2>About Us</h2>
                    <p>Discover a world of drinks and beverages at SipSavor, your go-to destination. With a wide range of articles, guides, recipes, and expert advice, we cater to all tastes. From classic cocktails to coffee brewing methods, our platform engages both enthusiasts and beginners. We celebrate the cultural and artisanal aspects of drinks, showcasing their rich history and stories. Join our vibrant community and embark on a flavorful journey. Welcome to SipSavor, where every sip tells a story.</p>
                </section>
                <section>
                    <h2>Our Services</h2>
                    <ul>
                        <li>
                            Drink Recipes and Mixology: Explore a diverse collection of drink recipes, from classic cocktails to innovative creations, and elevate your home bartending skills.
                        </li>
                        <li>
                            Beverage Education and Guides: Expand your knowledge of beverages with educational resources on their history, production methods, and flavor profiles.
                        </li>
                        <li>
                            Product Recommendations and Reviews: Trust our expert evaluations to guide your purchase decisions for drink-related products.
                        </li>
                    </ul>
                </section>
            </div>
            <section className="reviews">
                <h2>Customer’s review</h2>
                <p>Here is what our customers are saying about us.</p>
                <div className="reviews__box">
                    <div>
                        <img src={rating} alt="rating" />
                        <p>
                            One stop shops for wines, vodkas, Whisky, etc. the prices are very good...
                        </p>
                        <div className="user__post">
                            <img src={reviewDp} alt="user" />
                            <div>
                                <h4>Mark Hope</h4>
                                <p><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z" fill="#686767" />
                                </svg><span>Google Review</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={rating} alt="rating" />
                        <p>
                            One stop shops for wines, vodkas, Whisky, etc. the prices are very good...
                        </p>
                        <div className="user__post">
                            <img src={reviewDp} alt="user" />
                            <div>
                                <h4>Mark Hope</h4>
                                <p><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z" fill="#686767" />
                                </svg><span>Google Review</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={rating} alt="rating" />
                        <p>
                            One stop shops for wines, vodkas, Whisky, etc. the prices are very good...
                        </p>
                        <div className="user__post">
                            <img src={reviewDp} alt="user" />
                            <div>
                                <h4>Mark Hope</h4>
                                <p><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z" fill="#686767" />
                                </svg><span>Google Review</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={rating} alt="rating" />
                        <p>
                            One stop shops for wines, vodkas, Whisky, etc. the prices are very good...
                        </p>
                        <div className="user__post">
                            <img src={reviewDp} alt="user" />
                            <div>
                                <h4>Mark Hope</h4>
                                <p><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z" fill="#686767" />
                                </svg><span>Google Review</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Faq />
        </section>
    )
}

export default HomePage;