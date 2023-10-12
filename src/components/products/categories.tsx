import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../../store/slice/productSlice";
import { Product } from "../../schema/interface";

interface CategoriesProps {
    products: Product[];
}

export const Categories: FC<CategoriesProps> = ({ products }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items);

    const isProductInCart = (product: Product) => {
        return cartItems.some((item: Product) => item.id === product.id);
    }

    const addOrRemoveProduct = (product: Product) => {
        if (isProductInCart(product)) {
            dispatch(removeItem(product.id));
        } else {
            dispatch(addToCart(product));
        }
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
                        <button onClick={() => addOrRemoveProduct(product)}>
                            {isProductInCart(product) ? "Remove From Cart" : "Add To Cart"}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
