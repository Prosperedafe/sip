import signup from "../../assets/images/signup.png";
import { FC } from "react";
import { Link } from "react-router-dom";
import { LabelInput, PasswordInput, SubmitBtn } from "../../components/inputs";
import { useFormik } from "formik";
import { basicSchema } from "../../schema";
import { useDispatch } from "react-redux";
import { saveRegistrationDetails } from "../../store/slice/userSlice";

const SignUp: FC = () => {
    const dispatch = useDispatch()

    const onSubmit = (values: any) => {
        console.log(values);
        dispatch(saveRegistrationDetails({ values }))
    }
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
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
                        <LabelInput value={values.name} error={errors.name} touch={touched.name} blur={handleBlur} change={handleChange} className={errors.name && touched.name ? "input-error" : ""} name="name" label="Name" type="text" placeholder="john doe" id="name" />
                        <LabelInput value={values.email} error={errors.email} touch={touched.email} blur={handleBlur} change={handleChange} className={errors.email && touched.email ? "input-error" : ""} name="email" label="Email" type="email" placeholder="name@gmail.com" id="email" />
                        <PasswordInput value={values.password} error={errors.password} touch={touched.password} blur={handleBlur} change={handleChange} className={errors.password && touched.password ? "input-error" : ""} name="password" label="Password" placeholder="enter 8 characters" id="password" />
                        <PasswordInput value={values.confirmPassword} error={errors.confirmPassword} touch={touched.confirmPassword} blur={handleBlur} change={handleChange} className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""} name="confirmPassword" label="Confirm Password" placeholder="enter 8 characters" id="confirmPassword" />
                        <SubmitBtn disable={isSubmitting} content={isSubmitting ? "Signing Up..." : "Sign Up"} />
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