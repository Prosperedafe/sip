import Cart from "../pages/cart/cart";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CartIcon, MainLogo } from "./icons/MainLogo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/slice/userSlice";

export const Navbar = () => {
    const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);
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
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        changeNavState
        dispatch(logout())
        navigate("/login")
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    };

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
                    {isAuthenticated === true ?
                        <a onClick={setCartMode} className="cart items-center">
                            <CartIcon />
                            <span>Cart</span>
                        </a>
                        : null
                    }
                    <NavLink onClick={changeNavState} to="/contact">Contact</NavLink>
                    {isAuthenticated === false ?
                        <NavLink onClick={changeNavState} to="/signup">Sign Up</NavLink>
                        : null
                    }
                    {isAuthenticated === true ?
                        <NavLink onClick={changeNavState} to="/account/overview">Account</NavLink>
                        : null
                    }
                    {isAuthenticated === true ?
                        <a onClick={logOut} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                            <span>Logout</span>
                            <svg style={{ marginLeft: "8px" }} width="28" height="28" fill="none" stroke="#B3B2B2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 8.25V6.375A1.875 1.875 0 0 1 10.875 4.5h7.5a1.875 1.875 0 0 1 1.875 1.875v11.25a1.875 1.875 0 0 1-1.875 1.875H11.25c-1.036 0-2.25-.84-2.25-1.875V15.75"></path>
                                <path d="M13.5 15.75 17.25 12 13.5 8.25"></path>
                                <path d="M3.75 12H16.5"></path>
                            </svg>
                        </a>
                        : null
                    }
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