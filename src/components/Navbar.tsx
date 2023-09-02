import { NavLink } from "react-router-dom";
import { CartIcon, MainLogo } from "./icons/MainLogo";

export const Navbar = () => {
    return (
        <header className="main__header">
            <nav className="main__header__nav flex space-between items-center">
                <MainLogo />
                <div className="links flex items-center">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">Home</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/cart" className="cart items-center">
                        <CartIcon />
                        <span>Cart</span>
                    </NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <NavLink to="/account/overview">Account</NavLink>
                </div>
            </nav>
        </header>
    )
}