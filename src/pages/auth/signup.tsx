import signup from "../../assets/images/signup.png";
import { FC } from "react";
import { Link } from "react-router-dom";
import { LabelInput, PasswordInput, SubmitBtn } from "../../components/inputs";
import { useFormik } from "formik";
import { basicSchema } from "../../schema";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slice/userSlice";

const SignUp: FC = () => {
    // const user = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    const onSubmit = (values: any) => {
        // console.log(values);
        dispatch(setUser(values))
        localStorage.setItem("sip-auth", JSON.stringify(values))
        // if (localStorage.getItem("sip-auth") !== null || undefined) {
        //     navigate("/account/overview")
        //     setTimeout(() => {
        //         window.location.reload()
        //     }, 2000)
        // }
    }

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit
    });

    return (
        <>
            <section className="auth flex">
                <section>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <LabelInput value={values.firstName} error={errors.firstName} touch={touched.firstName} blur={handleBlur} change={handleChange} className={errors.firstName && touched.firstName ? "input-error" : ""} name="firstName" label="First Name" type="text" placeholder="john" id="firstName" />
                        <LabelInput value={values.lastName} error={errors.lastName} touch={touched.lastName} blur={handleBlur} change={handleChange} className={errors.lastName && touched.lastName ? "input-error" : ""} name="lastName" label="Last Name" type="text" placeholder="doe" id="lastName" />
                        <LabelInput value={values.email} error={errors.email} touch={touched.email} blur={handleBlur} change={handleChange} className={errors.email && touched.email ? "input-error" : ""} name="email" label="Email" type="email" placeholder="name@gmail.com" id="email" />
                        <PasswordInput value={values.password} error={errors.password} touch={touched.password} blur={handleBlur} change={handleChange} className={errors.password && touched.password ? "input-error" : ""} name="password" label="Password" placeholder="enter 8 characters" id="password" />
                        <PasswordInput value={values.confirmPassword} error={errors.confirmPassword} touch={touched.confirmPassword} blur={handleBlur} change={handleChange} className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""} name="confirmPassword" label="Confirm Password" placeholder="enter 8 characters" id="confirmPassword" />
                        <SubmitBtn disable={""} content={isSubmitting ? "Signing Up..." : "Sign Up"} />
                    </form>
                    <p className="link">Already have an account? <Link to="/login">Login</Link></p>
                </section>
                <figure>
                    <img src={signup} alt="sign up" />
                </figure>
            </section>
        </>
    )
}

export default SignUp;