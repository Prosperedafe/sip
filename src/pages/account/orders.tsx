import { AccountNav } from "../../components/AccountNav";
import pineapple from "../../assets/icons/pineapple.png";
import blackberry from "../../assets/icons/blackberry.png";
import mixed from "../../assets/icons/mixed.png";
import watermelon from "../../assets/icons/watermelon.png";
import coconut from "../../assets/icons/coconut.png";
import horty from "../../assets/icons/horty.png";

const orders: Array<object> = [
    {
        drink: pineapple,
        name: "Pineapple Soft Drink",
        quantity: "1",
        price: "$20",
        status: "In - Transit",
        deliveryTime: "3:00pm",
    },
    {
        drink: blackberry,
        name: "Blackberry Soft Drink",
        quantity: "1",
        price: "$20",
        status: "In - Transit",
        deliveryTime: "3:00pm",
    },
    {
        drink: mixed,
        name: "Mixed Fruits Soft Drink",
        quantity: "1",
        price: "$20",
        status: "In - Transit",
        deliveryTime: "3:00pm",
    },
    {
        drink: horty,
        name: "Horthy Spirit",
        quantity: "1",
        price: "$20",
        status: "In - Transit",
        deliveryTime: "3:00pm",
    },
    {
        drink: watermelon,
        name: "Sweet Watermelon Drink",
        quantity: "1",
        price: "$20",
        status: "In - Transit",
        deliveryTime: "3:00pm",
    },
    {
        drink: coconut,
        name: "Coconut Juicy Drink",
        quantity: "1",
        price: "$20",
        status: "In - Transit",
        deliveryTime: "3:00pm",
    },
]

const AccountOrders = () => {
    return (
        <section id="account__orders">
            <AccountNav />
            <section id="account__orders__orders">
                <h2>My Orders</h2>
                <div className="orders">
                    {orders.map((order: any, index: number) => {
                        return (
                            <div className="order" key={index}>
                                <div className="flex">
                                    <img src={order.drink} alt={order.name} />
                                    <div>
                                        <h3>{order.name}</h3>
                                        <p><span>Qty: {order.quantity}</span> <span>Price: {order.price}</span></p>
                                    </div>
                                </div>
                                <div>
                                    <h3>Status</h3>
                                    <p>{order.status}</p>
                                </div>
                                <div>
                                    <h3>Delivery Time</h3>
                                    <p role="time">{order.deliveryTime}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </section>
    )
}

export default AccountOrders;