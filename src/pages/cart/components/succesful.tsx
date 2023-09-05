import { FC } from "react";
import { Back } from "../cart";
import { Link } from "react-router-dom";
import confirm from "../../../assets/images/check.png"
import delivery from "../../../assets/images/undraw_on_the_way_re_swjt 1.png"

interface actions {
    mode: any
    pay: any
    check: any
    hideNav: any
}

export const Succesful: FC<actions> = ({ mode, check, hideNav }) => {
    const handleClick = () => {
        mode()
        hideNav()
    }
    return (
        <section className="succesful">
            <div className="hide-page">
                <Back summary={check} />
                <div onClick={mode} className="icon">
                    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="white" />
                        <path d="M13 13L27.2418 27.0418" stroke="#51526C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27.2422 13L13.0004 27.0418" stroke="#51526C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <h2>Payment Successful</h2>
            <p>Your order will be delivered in 10 minutes</p>
            <img className="check" src={confirm} alt="checked" />
            <img className="deliver" src={delivery} alt="delivering" />
            <Link onClick={handleClick} to="account/orders" className="light-brown">Go to Order History</Link>
        </section>
    )
}