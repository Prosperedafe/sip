import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem, emptyCart } from "../../../store/slice/productSlice";

interface actions {
    mode: any
    checkOut?: any
}

export const Summary: FC<actions> = ({ checkOut, mode }) => {

    const cartItems = useSelector((state: any) => state?.cart?.items)

    const dispatch = useDispatch()

    const total = cartItems.reduce((acc: any, item: any) => acc + parseInt(item.price), 0);

    return (
        <section id="cart__summary">
            <div className="hide-page">
                <span></span>
                <div onClick={mode} className="icon">
                    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="white" />
                        <path d="M13 13L27.2418 27.0418" stroke="#51526C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27.2422 13L13.0004 27.0418" stroke="#51526C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            {cartItems.length > 0 ? <h2>Cart Summary</h2> : <h2>Your Cart is Empty</h2>}
            {cartItems.map((items: any) => {
                return (
                    <div id="cart__items" key={items.id}>
                        <div className="item">
                            <img className="item__image" src={items.drink} alt={items.name} />
                            <div>
                                <h3>{items.name}</h3>
                                <div className="actions">
                                    <button onClick={() => dispatch(decrementQuantity(items.id))}>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_943_34642)">
                                                <path d="M13.5807 10.5H6.91406" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M10.2474 18.8337C14.8498 18.8337 18.5807 15.1027 18.5807 10.5003C18.5807 5.89795 14.8498 2.16699 10.2474 2.16699C5.64502 2.16699 1.91406 5.89795 1.91406 10.5003C1.91406 15.1027 5.64502 18.8337 10.2474 18.8337Z" stroke="#FF0000" strokeWidth="2" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_943_34642">
                                                    <rect width="20" height="20" fill="white" transform="translate(0.24707 0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <p>{items.quantity}</p>
                                    <button onClick={() => dispatch(incrementQuantity(items.id))}>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8408 9.875H10.8721V6.90625C10.8721 6.82031 10.8018 6.75 10.7158 6.75H9.77832C9.69238 6.75 9.62207 6.82031 9.62207 6.90625V9.875H6.65332C6.56738 9.875 6.49707 9.94531 6.49707 10.0312V10.9688C6.49707 11.0547 6.56738 11.125 6.65332 11.125H9.62207V14.0938C9.62207 14.1797 9.69238 14.25 9.77832 14.25H10.7158C10.8018 14.25 10.8721 14.1797 10.8721 14.0938V11.125H13.8408C13.9268 11.125 13.9971 11.0547 13.9971 10.9688V10.0312C13.9971 9.94531 13.9268 9.875 13.8408 9.875Z" fill="#008000" />
                                            <path d="M10.2471 1.75C5.41504 1.75 1.49707 5.66797 1.49707 10.5C1.49707 15.332 5.41504 19.25 10.2471 19.25C15.0791 19.25 18.9971 15.332 18.9971 10.5C18.9971 5.66797 15.0791 1.75 10.2471 1.75ZM10.2471 17.7656C6.23535 17.7656 2.98145 14.5117 2.98145 10.5C2.98145 6.48828 6.23535 3.23438 10.2471 3.23438C14.2588 3.23438 17.5127 6.48828 17.5127 10.5C17.5127 14.5117 14.2588 17.7656 10.2471 17.7656Z" fill="#008000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="remove__item">
                            <button onClick={() => dispatch(removeItem(items.id))}>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.7417 0.756087C14.8232 0.837367 14.8878 0.933925 14.9319 1.04023C14.9761 1.14653 14.9988 1.26049 14.9988 1.37559C14.9988 1.49068 14.9761 1.60464 14.9319 1.71095C14.8878 1.81725 14.8232 1.91381 14.7417 1.99509L2.4917 14.2451C2.3274 14.4094 2.10456 14.5017 1.8722 14.5017C1.63984 14.5017 1.417 14.4094 1.2527 14.2451C1.0884 14.0808 0.996094 13.8579 0.996094 13.6256C0.996094 13.3932 1.0884 13.1704 1.2527 13.0061L13.5027 0.756087C13.584 0.674602 13.6805 0.609952 13.7868 0.56584C13.8931 0.521729 14.0071 0.499023 14.1222 0.499023C14.2373 0.499023 14.3513 0.521729 14.4576 0.56584C14.5639 0.609952 14.6604 0.674602 14.7417 0.756087Z" fill="#C8161D" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.25316 0.756087C1.17167 0.837367 1.10702 0.933925 1.06291 1.04023C1.0188 1.14653 0.996094 1.26049 0.996094 1.37559C0.996094 1.49068 1.0188 1.60464 1.06291 1.71095C1.10702 1.81725 1.17167 1.91381 1.25316 1.99509L13.5032 14.2451C13.6675 14.4094 13.8903 14.5017 14.1227 14.5017C14.355 14.5017 14.5779 14.4094 14.7422 14.2451C14.9065 14.0808 14.9988 13.8579 14.9988 13.6256C14.9988 13.3932 14.9065 13.1704 14.7422 13.0061L2.49216 0.756087C2.41088 0.674602 2.31432 0.609952 2.20802 0.56584C2.10171 0.521729 1.98775 0.499023 1.87266 0.499023C1.75757 0.499023 1.6436 0.521729 1.5373 0.56584C1.43099 0.609952 1.33444 0.674602 1.25316 0.756087Z" fill="#C8161D" />
                                </svg>
                            </button>
                            <p>${items.price}</p>
                        </div>
                    </div>
                )
            })}
            {cartItems.length > 0 ?
                <>
                    <section id="cart__total">
                        <div className="sub-total">
                            <p>Subtotal</p>
                            <p>$60</p>
                        </div>
                        <div className="delivery">
                            <p>Delivery</p>
                            <p>$10</p>
                        </div>
                        <div className="address">
                            <p>Address</p>
                            <p>No 6, Unity Str, Off Ikotun, Lagos State</p>
                        </div>
                        <div className="total">
                            <p>Total</p>
                            <p>${total}</p>
                        </div>
                        <div className="actions">
                            <button className="light-brown">Continue Shopping</button>
                            <button className="light-brown" onClick={checkOut}>Checkout</button>
                        </div>
                    </section>
                    <button className="empty-cart" onClick={() => dispatch(emptyCart(cartItems))}>Empty Cart</button>
                </>
                : null
            }
        </section>
    )
}