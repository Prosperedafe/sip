import { FC } from "react";

interface props {
    products: Array<object>
}

export const Categories: FC<props> = ({ products }) => {
    return (
        <>
            <div className="products__categories">
                {products.map((product: any) => {
                    return (
                        <div key={product.id}>
                            <figure>
                                <img src={product.drink} alt={product.name} />
                                <figcaption>{product.name}</figcaption>
                            </figure>
                            <div className="price">
                                <p>Price</p><p>{product.price}</p>
                            </div>
                            <div className="ratings">
                                <p>Ratings</p>
                                <img src={product.rating} alt="rating" />
                            </div>
                            <button>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}