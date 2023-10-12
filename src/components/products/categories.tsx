import { FC } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slice/productSlice";
import { Product } from "../../schema/interface";


interface CategoriesProps {
    products: Product[];
}


export const Categories: FC<CategoriesProps> = ({ products }) => {
    const dispatch = useDispatch()

    const addProductToCart = (product: Product) => {
        dispatch(addToCart(product));
    }

    return (
        <div className="products__categories">
            {products.map((product: Product) => {
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
                        <button onClick={() => addProductToCart(product)}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    )
}