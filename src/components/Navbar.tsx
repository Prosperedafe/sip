import Cart from "../pages/cart/cart";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CartIcon, MainLogo } from "./icons/MainLogo";

export const Navbar = () => {

    const [showCart, setShowCart] = useState<boolean>(false)
    const [showNav, setShowNav] = useState<boolean>(false)

    const setCartMode = () => {
        setShowCart(!showCart)
        setShowNav(false)
    }
    const changeNavState = () => {
        setShowNav(!showNav)
    }
    const redirect = () => {
        setShowCart(!showCart)
    }
    const authId = JSON.parse(localStorage.getItem("sip-auth")!)
    return (
        <header className="main__header">
            <nav className="main__header__nav flex space-between items-center">
                <MainLogo />
                <div className={showNav ? "links flex items-center show" : "links flex items-center"}>
                    <svg onClick={changeNavState} className="close-nav" width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="white" />
                        <path d="M13 13L27.2418 27.0418" stroke="#51526C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27.2422 13L13.0004 27.0418" stroke="#51526C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <NavLink onClick={changeNavState} className={({ isActive }) => (isActive ? "active" : "")} to="/">Home</NavLink>
                    <NavLink onClick={changeNavState} to="/blog">Blog</NavLink>
                    {authId !== null || undefined ?
                        <a onClick={setCartMode} className="cart items-center">
                            <CartIcon />
                            <span>Cart</span>
                        </a>
                        : null}
                    <NavLink onClick={changeNavState} to="/contact">Contact</NavLink>
                    <NavLink onClick={changeNavState} to="/signup">Sign Up</NavLink>
                    {authId !== null || undefined ?
                        <NavLink onClick={changeNavState} to="/account/overview">Account</NavLink>
                        : null}
                </div>
                <div style={{ opacity: showNav ? "0" : "1" }} className="mobile__nav__toggler" onClick={changeNavState}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {showCart ? <Cart mode={setCartMode} hideNav={changeNavState} redirect={redirect} /> : <></>}
            </nav>
        </header>
    )
}