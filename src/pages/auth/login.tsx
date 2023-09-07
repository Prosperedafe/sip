import { FC } from "react";
import login from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import { LabelInput, PasswordInput, SubmitBtn } from "../../components/inputs";
import { useFormik } from "formik";
import { loginSchema } from "../../schema";

const Login: FC = () => {
    const onSubmit = (values: any) => {
        console.log(values);
    }
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit
    });
    return (
        <section className="auth flex">
            <figure>
                <img src={login} alt="login" />
            </figure>
            <section className="auth__form">
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