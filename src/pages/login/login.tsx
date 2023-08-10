import { FC } from "react";
import login from "../../assets/images/login.png"

const Login: FC = () => {
    return (
        <section id="login">
            <figure>
                <img src={login} alt="login" />
            </figure>
            <section id="login__form">
                <h2>Login</h2>
                <form>
                    <label htmlFor="Email Address">Email Address</label>
                    <input type="text" placeholder="name@gmail.com" />
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder="enter 8 characters" />
                    <button>Login</button>
                </form>
            </section>
        </section>
    )
}
export default Login