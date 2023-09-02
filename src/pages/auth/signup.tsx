import { FC } from "react";
import signup from "../../assets/images/signup.png";
import { Link } from "react-router-dom";

const SignUp: FC = () => {
    return (
        <>
            <section id="signup" className="flex">
                <section>
                    <h2>Sign Up</h2>
                    <form>
                        <label htmlFor="Email Address">Name</label>
                        <input type="text" placeholder="john doe" />
                        <label htmlFor="Email Address">Email Address</label>
                        <input type="text" placeholder="name@gmail.com" />
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder="enter 8 characters" />
                        <label htmlFor="password">Confirm Password</label>
                        <input type="text" placeholder="enter 8 characters" />
                        <button>Sign Up</button>
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </section>
                <figure>
                    <img src={signup} alt="sign up" />
                </figure>
            </section>
        </>
    )
}

export default SignUp;