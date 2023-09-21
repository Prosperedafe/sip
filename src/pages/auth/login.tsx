import { FC, useEffect } from "react";
import loginIcon from "../../assets/images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { LabelInput, PasswordInput, SubmitBtn } from "../../components/inputs";
import { useFormik } from "formik";
import { loginSchema } from "../../schema";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../../store/slice/userSlice";

const Login: FC = () => {

    const user = useSelector((state: any) => state.user?.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = () => {
        dispatch(login())
        setTimeout(() => {
            navigate("/account/overview")
            window.location.reload()
        })
    }

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit
    });

    const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated === true) {
            navigate("/account/overview")
        }
    }, [])

    return (
        <section className="auth flex">
            <figure>
                <img src={loginIcon} alt="login" />
            </figure>
            <section className="auth__form">
                {user?.firstName !== undefined ? <h3>Welcome back {user?.firstName}</h3> : <></>}
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <LabelInput value={values.email} error={errors.email} touch={touched.email} blur={handleBlur} change={handleChange} name="email" id="email" type="email" className="" label="Email Address" placeholder="name@gmail.com" />
                    <PasswordInput value={values.password} error={errors.password} touch={touched.password} blur={handleBlur} change={handleChange} name="password" id="password" type="password" className="" label="Password" placeholder="Enter your password" />
                    <SubmitBtn content={isSubmitting ? "Logging in..." : "Login"} disable={isSubmitting} />
                </form>
                <p className="link">Already have an account? <Link to="/signup">Sign Up</Link></p>
            </section>
        </section>
    )
}
export default Login