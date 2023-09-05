import { FC, useState } from "react";
import { Summary } from "./components/summary";
import { CheckOut } from "./components/checkOut";
import { Succesful } from "./components/succesful";

interface actions {
    mode?: any;
    summary?: any
    hideNav?: any
}

export const Back: FC<actions> = ({ summary }) => {
    return (
        <button onClick={summary} className="back">
            <svg width="25" height="13" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M27.1247 9.00021C27.1247 8.75157 27.026 8.51311 26.8501 8.3373C26.6743 8.16148 26.4359 8.06271 26.1872 8.06271H4.07535L9.97597 2.16396C10.0631 2.07679 10.1323 1.97331 10.1795 1.85943C10.2266 1.74554 10.2509 1.62348 10.2509 1.50021C10.2509 1.37694 10.2266 1.25488 10.1795 1.14099C10.1323 1.0271 10.0631 0.923622 9.97597 0.836457C9.88881 0.749293 9.78533 0.68015 9.67144 0.632977C9.55756 0.585803 9.43549 0.561523 9.31222 0.561523C9.18895 0.561523 9.06689 0.585803 8.953 0.632977C8.83912 0.68015 8.73564 0.749293 8.64847 0.836457L1.14847 8.33646C1.06117 8.42354 0.991899 8.527 0.944637 8.6409C0.897375 8.75479 0.873047 8.87689 0.873047 9.00021C0.873047 9.12352 0.897375 9.24562 0.944637 9.35952C0.991899 9.47342 1.06117 9.57687 1.14847 9.66396L8.64847 17.164C8.73564 17.2511 8.83912 17.3203 8.953 17.3674C9.06689 17.4146 9.18895 17.4389 9.31222 17.4389C9.43549 17.4389 9.55756 17.4146 9.67144 17.3674C9.78533 17.3203 9.88881 17.2511 9.97597 17.164C10.0631 17.0768 10.1323 16.9733 10.1795 16.8594C10.2266 16.7455 10.2509 16.6235 10.2509 16.5002C10.2509 16.3769 10.2266 16.2549 10.1795 16.141C10.1323 16.0271 10.0631 15.9236 9.97597 15.8365L4.07535 9.93771H26.1872C26.4359 9.93771 26.6743 9.83894 26.8501 9.66312C27.026 9.48731 27.1247 9.24885 27.1247 9.00021Z" fill="white" />
            </svg>
            <span>Back</span>
        </button>
    )
}

const Cart: FC<actions> = ({ mode, hideNav }) => {
    const [display, setDisplay] = useState<string>("summary")

    const checkOut = () => setDisplay("checkout")
    const summary = () => setDisplay("summary")
    const payment = () => setDisplay("payment")
    const succesful = () => setDisplay("succesful")

    return (
        <section id="cart">
            {display === "summary" ? <Summary mode={mode} checkOut={checkOut} /> : null}
            {display === "checkout" ? <CheckOut pay={payment} summary={summary} succesful={succesful} mode={mode} /> : null}
            {display === "succesful" ? <Succesful pay={payment} hideNav={hideNav} check={checkOut} mode={mode} /> : null}
        </section>
    )
}
export default Cart;